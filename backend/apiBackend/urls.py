from django.urls import path
from apiBackend import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('training/', views.TrainingList.as_view(), name="mY Training data view list"),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
