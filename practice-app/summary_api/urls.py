from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path
from summary_api.views import *

urlpatterns = [
    path('', get_summary),
]

