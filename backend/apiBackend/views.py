
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
# @csrf_exempt
# def detect(request):
#     if request.method == 'POST':
#         im_bytes = request.FILES['image'].read()
#         im_file = BytesIO(im_bytes)
#         image = Image.open(im_file)
#         image.save('my_image.png')
#         results = model("my_image.png")
#         results.save("result.png")
#         # Render the response with the base64 image
        




class TrainingList(ListAPIView):
    queryset = TrainingData.objects.all()
    serializer_class = TrainingDataSerializer

    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)
    

    def post(self, request, *args, **kwargs):
        if request.method == 'POST':
            #from images frame 
            
            trainingDataName = request.POST.get('Name')
            trainingDataComment = request.POST.get('Comment')
            # from video capturing
            frameName = request.POST.get('frameName')
            frameType = request.POST.get('frameType')
            frameComment = request.POST.get('frameComment')
            frameImage = request.POST.get('frameImage')
            md = 0
            ed = 0
            mi = 0
            print(frameType)
            if frameType == 'Middle Ball':
                md = 1
            if frameType == 'Edge Ball':
                ed = 1
            if frameType == 'Missed Ball':
                mi = 1

            if trainingDataName:
                im_bytes = request.FILES['Frame'].read()
                timestamp = datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
                filename_img = f'frame_{timestamp}.jpg'
                im_file = BytesIO(im_bytes)
                image = Image.open(im_file)
                image.save(filename_img)
                results = model(filename_img)
                print("result is :"+str(results))
                results.save("result.png")
                trainingData = TrainingData(Name=trainingDataName, Frame=filename_img, Comment=trainingDataComment,
                                            Middle=md, Edge=ed, Missed=mi)
                trainingData.save()

            if frameImage:
                # decode the base64 image data into bytes
                # remove the "data:image/jpeg;base64," prefix
                data = frameImage.split(',')[1]
                image_bytes = base64.b64decode(data)
                image = Image.open(BytesIO(image_bytes))
                # generate a new filename based on the current timestamp
                timestamp = datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
                filename_vide_img = f'frame_{timestamp}.jpg'
                # save the image to a file with the new filename
                image.save(filename_vide_img)
                results = model(filename_vide_img)
                print("result is :"+str(results))
                results.save("result.png")
                # create a new Frame object and save it to the database
                frame_data = TrainingData(Name=frameName,
                                          Comment=frameComment, Frame=filename_vide_img, Middle=md, Edge=ed, Missed=mi)
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

