from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('farmfront.urls')),
    path('', include('farmback.urls'))
]
