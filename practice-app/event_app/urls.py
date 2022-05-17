from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('sign_in', views.sign_in, name="sign_in"),
    path('sign_up', views.sign_up, name="sign_up"),
    path('addUser', views.addUser, name="addUser"),
    path('home', views.home, name="home"),
    path('user_login', views.user_login, name="user_login"),
    path('viewGithubInfo', views.viewGithubInfo, name="viewGithubInfo"),
    path('viewGithubInfoPage', views.viewGithubInfoPage, name="viewGithubInfoPage"),
    path('add_event', views.add_event, name="add_event")
]
