from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path
from player_info_api.views import *

urlpatterns = [
    path('', create_player),
    path('list', show_player_list)
]
