from django.shortcuts import render
from django.shortcuts import get_object_or_404, render
from django.shortcuts import render, redirect

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

    def post(self, request):
        if request.method == 'POST':
            # body = json.loads(request.body.decode('utf-8'))
            # print(body.get('Name'))
            # print(body.get('Date'))
            # trainingDataName =  body.get('Name')
            # trainingDataFrame =  body.FILES.get('Frame')
            # trainingDataComment =  body.get('Comment')
            # trainingDataMiddle =  body.get('Middle')
            # trainingDataEdge =  body.get('Edge')
            # trainingDataMissed=  body.get('Missed')

            trainingDataName =  request.POST.get('Name')
            trainingDataFrame =  request.FILES.get('Frame')
            trainingDataComment =  request.POST.get('Comment')
            trainingDataMiddle =  request.POST.get('Middle')
            trainingDataEdge =  request.POST.get('Edge')
            trainingDataMissed=  request.POST.get('Missed')

            print(trainingDataName)
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
