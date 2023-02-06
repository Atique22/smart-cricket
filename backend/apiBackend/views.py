from django.shortcuts import render

# Create your views here.
from .serializers import TrainingDataSerializer
from .models import TrainingData
from rest_framework.generics import ListAPIView
import json
from django.http import JsonResponse

class TrainingList(ListAPIView):
    queryset = TrainingData.objects.all()
    serializer_class = TrainingDataSerializer