from rest_framework import serializers
from .models import TrainingData
# from django.conf import settings


class TrainingDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = TrainingData
        fields = '__all__'
        # fields = ['id', 'Name', 'Date']
