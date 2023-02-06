from django.contrib import admin

# Register your models here.
from .models import TrainingData
@admin.register(TrainingData)
class TrainingDataAdmin(admin.ModelAdmin):
    list_display = ['id', 'Name', 'Date']