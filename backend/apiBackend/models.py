from django.db import models

# Create your models here.
class TrainingData(models.Model):
    Name = models.CharField( max_length=50)
    Date = models.DateField(auto_now=True, auto_now_add=False)
    Comment = models.CharField(max_length=100, default="Here User comment ....")
    Frame = models.FileField(upload_to='images/')
    Middle = models.IntegerField(default=0)
    Edge = models.IntegerField(default=0)
    Missed = models.IntegerField(default=0)



