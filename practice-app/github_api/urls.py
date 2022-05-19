from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path
from github_api.views import *

urlpatterns = [
    path('', github_user_create),
    path('list/', github_user_list)
]