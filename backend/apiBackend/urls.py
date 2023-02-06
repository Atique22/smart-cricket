from django.urls import path
from apiBackend import views

urlpatterns = [
    path('training/', views.TrainingList.as_view(), name="mY Training data view list"),
]
