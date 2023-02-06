from rest_framework import serializers
from .models import TrainingData

class TrainingDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingData
        field = ['id', 'Name', 'Date']
