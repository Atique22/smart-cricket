from rest_framework import serializers
from .models import TrainingData

class TrainingDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingData
        fields = '__all__'
        # field = ['id', 'Name', 'Date']
