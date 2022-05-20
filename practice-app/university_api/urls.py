from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path
from university_api.views import university_list


urlpatterns = [
    path('list/',university_list,name="list")
]
