from django.urls import path

from . import views

urlpatterns = [
    path('health_check', views.health_check, name='health_check'),
    path('signup', views.signup, name='signup'),
    path('login', views.login, name='login'),
    path('favourite',views.favourite, name = 'favourite'),
    path('update_profile_info', views.update_profile_info, name='update_profile_info'),
]