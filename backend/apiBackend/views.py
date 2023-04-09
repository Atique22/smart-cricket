
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
import requests
import os
import torch
import datetime
import base64
from io import BytesIO
from PIL import Image

model =  torch.hub.load('yolov5','custom', path='yolov5/runs/train/exp/weights/best.pt', force_reload=True, source='local');


class TrainingList(ListAPIView):
    queryset = TrainingData.objects.all()
    serializer_class = TrainingDataSerializer

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
                image.save(filename_img)
                results = model(filename_img)
                print("result is :"+str(results))
                results.save()
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
                image.save(filename_vide_img)
                results = model(filename_vide_img)
                print("result is :"+str(results))
                results.save()
                # create a new Frame object and save it to the database
                # image_path = '../runs/detect/exp'
                # # Create the directory if it does not exist
                # if not os.path.exists(image_path):
                #     os.makedirs(image_path)
                # with open(image_path, 'rb') as f:
                #     image_data = f.read()
                # full_path = os.path.join(image_path, filename_vide_img)
                # # save the image to the file
                # with open(full_path, 'wb') as f:
                #     f.write(image_data)
                # print("BASE_DIR: "+str(BASE_DIR))
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
            if updateName:
                item.Name = updateName
                item.Comment = updateComment
                item.Middle = updateMiddle
                item.Missed = updateMissed
                item.Edge = updateEdge
                item.save()
                return JsonResponse({'message': 'Data updated successfully'})
            else:
                return JsonResponse({'error': 'Please provide a student name'})

