from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path
from geolocation_api.views import *

urlpatterns = [
    path('', ip_addr_create),
    path('list/', ip_addr_list)
]

