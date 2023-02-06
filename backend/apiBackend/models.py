from django.db import models

# Create your models here.
class TrainingData(models.Model):
    Name = models.CharField( max_length=50)
    Date = models.DateField(auto_now=True, auto_now_add=False)