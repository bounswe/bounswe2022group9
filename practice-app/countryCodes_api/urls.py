from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path
from countryCodes_api.views import *

urlpatterns = [
    path('', country_list)
]