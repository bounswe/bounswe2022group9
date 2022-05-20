from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path
from education_api.views import *

urlpatterns = [
    path('add/', add_education,name="add"),
    path('list/', list_education,name="list")
]