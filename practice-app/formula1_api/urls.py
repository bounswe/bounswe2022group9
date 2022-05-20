from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path

from formula1_api.views import *

urlpatterns = [
    path('', formula1_race_standing),
    
]