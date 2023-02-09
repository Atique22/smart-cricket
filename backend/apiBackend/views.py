from django.shortcuts import render
from django.shortcuts import get_object_or_404, render
from django.shortcuts import render, redirect
from django.core.files.storage import FileSystemStorage

# Create your views here.
from .serializers import TrainingDataSerializer
from .models import TrainingData
from rest_framework.generics import ListAPIView
import json
from django.http import JsonResponse
from django.http import HttpResponse


class TrainingList(ListAPIView):
    queryset = TrainingData.objects.all()
    serializer_class = TrainingDataSerializer

    def post(self, request, *args, **kwargs):
        if request.method == 'POST':
            
            trainingDataName =  request.POST.get('Name')
            trainingDataFrame =  request.FILES.get('Frame')
            trainingDataComment =  request.POST.get('Comment')
            trainingDataMiddle =  request.POST.get('Middle')
            trainingDataEdge =  request.POST.get('Edge')
            trainingDataMissed=  request.POST.get('Missed')

            if trainingDataName:
                 trainingData = TrainingData(Name=trainingDataName, Frame =trainingDataFrame, Comment =trainingDataComment, Middle =trainingDataMiddle, Edge =trainingDataEdge, Missed =trainingDataMissed)
                 trainingData.save()

            return JsonResponse({'message': 'trainingData created successfully'})
        return JsonResponse({'error': 'Invalid request method'})
    
def delete_record(request, idDelete):
        # if request.method=='DELETE':
        item_id = int(idDelete)
        try:
            item = TrainingData.objects.get(id = item_id)
        except TrainingData.DoesNotExist:
            return JsonResponse({'message': 'Item deleted errors'})
        item.delete()
        # return redirect('http://localhost:3000/BackendViewData')
        return JsonResponse({'message': 'Item deleted successfully'})








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