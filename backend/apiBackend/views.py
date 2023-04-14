
from django.shortcuts import get_object_or_404
from django.core.files.storage import FileSystemStorage

# Create your views here.
from .serializers import TrainingDataSerializer
from .models import TrainingData
from rest_framework.generics import ListAPIView
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework.response import Response
import requests
import os
import torch
import datetime
import base64
from io import BytesIO
from PIL import Image
from django.core.paginator import Paginator

import boto3
# Set up an S3 client
# s3 = boto3.client('s3')
s3 = boto3.client(
    's3',
    aws_access_key_id='AKIAWRRRLNCH36OE4C6C',
    aws_secret_access_key='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',
    region_name='us-east-1'  # US East (N. Virginia) us-east-1
)


def get_image(request, image_key):
    s3 = boto3.resource('s3')
    obj = s3.Object('YOUR_BUCKET_NAME', image_key)
    image_content = obj.get()['Body'].read()
    response = HttpResponse(image_content, content_type=obj.content_type)
    return response


model = torch.hub.load(
    'yolov5', 'custom', path='yolov5/runs/train/exp/weights/best.pt', force_reload=True, source='local')


class TrainingList(ListAPIView):
    queryset = TrainingData.objects.all()
    serializer_class = TrainingDataSerializer

    # def get(self, request):
    #     queryset = self.get_queryset()
    #     paginator = Paginator(queryset, 5)  # Show 2 contacts per page.
    #     page_number = request.GET.get('page')
    #     page_obj = paginator.get_page(page_number)
    #     serializer = self.serializer_class(page_obj, many=True)
    #     return Response(serializer.data)

    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        if request.method == 'POST':
            # Get training data from form
            training_data_name = request.POST.get('Name')
            training_data_comment = request.POST.get('Comment')
            # from video capturing
            frame_name = request.POST.get('frameName')
            frame_type = request.POST.get('frameType')
            frame_comment = request.POST.get('frameComment')
            frame_image = request.POST.get('frameImage')

            # Get frame data from video capture
            md, ed, mi = 0, 0, 0
            if frame_type == 'Middle Ball':
                md = 1
            elif frame_type == 'Edge Ball':
                ed = 1
            elif frame_type == 'Missed Ball':
                mi = 1

            if 'Frame' in request.FILES:
                im_bytes = request.FILES['Frame'].read()
                timestamp = datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
                filename_img = f'frame_{timestamp}.jpg'
                im_file = BytesIO(im_bytes)
                image = Image.open(im_file)
                image.filename = filename_img
                results = model(filename_img)
                print("result is :"+str(results))
                # results.save()
                results.my_saver()
                # Upload image to S3 bucket
                bucket_name = 'fyp-aws'
                with open(filename_img, 'rb') as f:
                    s3.upload_fileobj(f, bucket_name, filename_img)

                trainingData = TrainingData(Name=training_data_name, Frame=filename_img, Comment=training_data_comment,
                                            Middle=md, Edge=ed, Missed=mi)
                trainingData.save()

            if 'frameImage' in request.POST:
                # decode the base64 image data into bytes
                # remove the "data:image/jpeg;base64," prefix
                data = frame_image.split(',')[1]
                image_bytes = base64.b64decode(data)
                image = Image.open(BytesIO(image_bytes))
                # generate a new filename based on the current timestamp
                timestamp = datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
                filename_vide_img = f'frame_{timestamp}.jpg'
                # save the image to a file with the new filename
                image.filename = filename_vide_img
                results = model(image)
                results.my_saver()
                print("result is :"+str(results))
                # # Upload image to S3 bucket
                # # get the absolute file path of the current working directory
                # abs_dir_path = os.path.abspath(os.getcwd())
                # # concatenate the directory path and filename to create an absolute file path
                # abs_file_path = os.path.join(abs_dir_path, filename_vide_img)
                # # Upload image to S3 bucket
                # # bucket_name = 'fyp-aws'
                # # with open(abs_file_path, 'rb') as f:
                # #     s3.upload_fileobj(f, bucket_name, filename_vide_img)

                frame_data = TrainingData(Name=frame_name,
                                          Comment=frame_comment, Frame=filename_vide_img, Middle=md, Edge=ed, Missed=mi)
                frame_data.save()

            return JsonResponse({'message': 'trainingData created successfully'})
        return JsonResponse({'error': 'Invalid request method'})

    def delete(self, request, *args, **kwargs):
        item_id = kwargs.get('idDelete')
        item = get_object_or_404(TrainingData, id=item_id)
        item.delete()
        return JsonResponse({'message': 'Item deleted successfully'})

    def put(self, request, *args, **kwargs):
        print("hello there")
        if request.method == "PUT":
            print("PUT IS WORKING ")
            item_id = kwargs.get('idUpdate')
            print(item_id)
            item = get_object_or_404(TrainingData, id=item_id)
            print(item.Name)
            updateName = request.data.get('Name')
            updateComment = request.data.get('Comment')
            updateMiddle = request.data.get('Middle')
            updateMissed = request.data.get('Missed')
            updateEdge = request.data.get('Edge')

            print(updateName)
            if item_id:
                item.Name = updateName
                item.Comment = updateComment
                item.Middle = updateMiddle
                item.Missed = updateMissed
                item.Edge = updateEdge
                item.save()
                return JsonResponse({'message': 'Data updated successfully'})
            else:
                return JsonResponse({'error': 'Please provide a student name'})
