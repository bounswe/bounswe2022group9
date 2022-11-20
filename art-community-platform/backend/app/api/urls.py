from django.urls import path

from .views.health_check import health_check
from .views.auth import login, signup
from .views.user import *
from .views.art_item import *
from .views.comment import get_comment_by_id
from .views.exhibition import get_exhibition_by_id
from .views.notification import get_notification_by_id
from .views.tag import *
from .views.follow import *

urlpatterns = [
    path('health_check', health_check, name='health_check'),

    path('signup', signup, name='signup'),
    path('login', login, name='login'),

    path('users/<int:user_id>', get_user_by_id, name='get_user_by_id'),
    path('art-items/<int:art_item_id>', get_art_item_by_id, name='get_art_item_by_id'),
    path('tags/<int:tag_id>', get_tag_by_id, name='get_tag_by_id'),
    path('comments/<int:comment_id>', get_comment_by_id, name='get_comment_by_id'),
    path('exhibitions/<int:exhibition_id>', get_exhibition_by_id, name='get_exhibition_by_id'),
    path('notifications/<int:notification_id>', get_notification_by_id, name='get_notification_by_id'),

    path('users/<int:user_id>/followers', get_followers_of_user, name='get_followers_of_user'),
    path('users/<int:user_id>/followings', get_followings_of_user, name='get_followings_of_user'),
    path('users/<int:user_id>/favourites', get_favourites_of_user, name='get_favourites_of_user'),
    path('users/<int:user_id>/comments', get_comments_of_user, name='get_comments_of_user'),
    path('users/<int:user_id>/exhibitions', get_exhibitions_of_user, name='get_exhibitions_of_user'),
    path('users/<int:user_id>/notifications', get_notifications_of_user, name='get_notifications_of_user'),

    path('art-items/<int:art_item_id>/favourites', get_favourites_of_art_item, name='get_favourites_of_art_item'),
    path('art-items/<int:art_item_id>/comments', get_comments_of_art_item, name='get_comments_of_art_item'),

    path('tag', create_tag, name='create_tag'),
    path('follow', follow, name='follow'),

]
