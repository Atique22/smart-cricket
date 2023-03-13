
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

import datetime
import base64
from io import BytesIO
from PIL import Image


class TrainingList(ListAPIView):
    queryset = TrainingData.objects.all()
    serializer_class = TrainingDataSerializer

    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        if request.method == 'POST':

            trainingDataName = request.POST.get('Name')
            trainingDataFrame = request.FILES.get('Frame')
            trainingDataComment = request.POST.get('Comment')
            # trainingDataMiddle = request.POST.get('Middle')
            # trainingDataEdge = request.POST.get('Edge')
            # trainingDataMissed = request.POST.get('Missed')

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

            if trainingDataFrame:
                trainingData = TrainingData(Name=trainingDataName, Frame=trainingDataFrame, Comment=trainingDataComment,
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
                filename = f'captured_frame_{timestamp}.jpg'

                # save the image to a file with the new filename
                image.save(filename)

                # create a new Frame object and save it to the database
                frame_data = TrainingData(Name=frameName,
                                          Comment=frameComment, Frame=filename, Middle=md, Edge=ed, Missed=mi)
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


# def delete_record(request, idDelete):
#     # if request.method=='DELETE':
#     item_id = int(idDelete)
#     try:
#         item = TrainingData.objects.get(id=item_id)
#     except TrainingData.DoesNotExist:
#         return JsonResponse({'message': 'Item deleted errors'})
#     item.delete()
#     # return redirect('http://localhost:3000/BackendViewData')
#     return JsonResponse({'message': 'Item deleted successfully'})


# data = json.loads(request.body)
    # Name = data['Name']
    # Comment = data['Comment']
    # Frame = data['Frame']
    # Middle = data['Middle']
    # Edge = data['Edge']
    # Missed = data['Missed']
    # training_data = TrainingData(
    # Name=Name,
    # Comment=Comment,
    # Frame=Frame,
    # Middle=Middle,
    # Edge=Edge,
    # Missed=Missed
    # )
    # training_data.save()

    # body = json.loads(request.body.decode('utf-8'))
    # print(body.get('Name'))
    # print(request.POST.get('Frame'))
    # trainingDataName =  body.get('Name')
    # trainingDataFrame = request.FILES.get('Frame')
    # trainingDataComment =  body.get('Comment')
    # trainingDataMiddle =  body.get('Middle')
    # trainingDataEdge =  body.get('Edge')
    # trainingDataMissed=  body.get('Missed')

    # print("name "+str(trainingDataName))
    # print(trainingDataFrame)
