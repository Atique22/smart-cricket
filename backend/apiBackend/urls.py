from django.urls import path
from apiBackend import views
from django.conf import settings
from django.conf.urls.static import static
from .views import delete_record

urlpatterns = [
    path('training/', views.TrainingList.as_view(), name="mY Training data view list"),
    path('delete/<int:idDelete>/', views.delete_record, name='idDelete'),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
