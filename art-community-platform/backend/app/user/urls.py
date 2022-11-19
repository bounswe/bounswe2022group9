from django.urls import path

from . import views

urlpatterns = [
    path('health_check', views.health_check, name='health_check'),

    path('signup', views.signup, name='signup'),
    path('login', views.login, name='login'),

    path('users/<int:user_id>', views.get_user_by_id, name='get_user_by_id'),
    path('art-items/<int:art_item_id>', views.get_art_item_by_id, name='get_art_item_by_id'),
    path('tags/<int:tag_id>', views.get_tag_by_id, name='get_tag_by_id'),
    path('comments/<int:comment_id>', views.get_comment_by_id, name='get_comment_by_id'),
    path('exhibitions/<int:exhibition_id>', views.get_exhibition_by_id, name='get_exhibition_by_id'),
    path('notifications/<int:notification_id>', views.get_notification_by_id, name='get_notification_by_id'),

    path('users/<int:user_id>/followers', views.get_followers_of_user, name='get_followers_of_user'),
    path('users/<int:user_id>/followings', views.get_followings_of_user, name='get_followings_of_user'),
    path('users/<int:user_id>/favourites', views.get_favourites_of_user, name='get_favourites_of_user'),
    path('users/<int:user_id>/comments', views.get_comments_of_user, name='get_comments_of_user'),
    path('users/<int:user_id>/exhibitions', views.get_exhibitions_of_user, name='get_exhibitions_of_user'),
    path('users/<int:user_id>/notifications', views.get_notifications_of_user, name='get_notifications_of_user'),

    path('art-items/<int:art_item_id>/favourites', views.get_favourites_of_art_item, name='get_favourites_of_art_item'),
    path('art-items/<int:art_item_id>/comments', views.get_comments_of_art_item, name='get_comments_of_art_item'),

]
