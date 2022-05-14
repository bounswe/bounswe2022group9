from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('sign_in', views.sign_in, name="sign_in"),
    path('sign_up', views.sign_up, name="sign_up"),
    path('home', views.home, name="home"),
    path('user_login', views.user_login, name="user_login")
]
