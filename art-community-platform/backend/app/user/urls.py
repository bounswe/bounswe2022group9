from django.urls import path

from . import views

urlpatterns = [
    path('health_check', views.health_check, name='health_check'),
    path('signup', views.signup, name='signup'),
    path('login', views.login, name='login'),
    path('users/<int:user_id>', views.get_user_by_id, name='get_user_by_id'),
    path('art-items/<int:art_item_id>', views.get_art_item_by_id, name='get_art_item_by_id'),
    path('tags/<int:tag_id>', views.get_tag_by_id, name='get_tag_by_id'),
]
