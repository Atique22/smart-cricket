from django.urls import path
from apiBackend import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('training/', views.TrainingList.as_view(), name="Training data"),
    path('delete/<int:idDelete>/', views.TrainingList.as_view(), name='data Delete'),
    path('update/<int:idUpdate>/', views.TrainingList.as_view(), name='data update'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
