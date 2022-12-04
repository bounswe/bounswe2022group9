from django.urls import path

from .views.favourite import favourite
from .views.health_check import health_check
from .views.auth import login, signup
from .views.image_upload import upload_image
from .views.profile import update_profile_info, get_profile_info
from .views.user import *
from .views.art_item import *
from .views.comment import get_comment_by_id, comment
from .views.exhibition import get_exhibition_by_id, create_exhibition
from .views.notification import get_notification_by_id
from .views.tag import *
from .views.follow import *
from .views.homepage import *
from .views.search import *

urlpatterns = [
    path('health-check', health_check, name='health_check'),

    path('signup', signup, name='signup'),
    path('login', login, name='login'),

    path('users', get_all_users, name='get_all_users'),
    path('art-items', get_all_art_items, name='get_all_art_items'),

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

    path('art-item', create_art_item, name='create_art_item'),
    path('upload-image', upload_image, name='upload_image'),
    path('exhibition', create_exhibition, name='create_exhibition'),
    path('follow', follow, name='follow'),
    path('favourite', favourite, name='favourite'),
    path('comment', comment, name='comment'),
    path('tag', create_tag, name='create_tag'),

    path('homepage', get_homepage, name='homepage'),

    path('users/<int:user_id>/update-profile-info', update_profile_info, name='update_profile_info'),
    path('users/<int:user_id>/get-profile-info', get_profile_info, name='get_profile_info'),


    path('users/search/<str:keyword>', search_user, name='search_user'),
    path('art-items/search/<str:keyword>', search_art_item, name='search_art_item'),
    #path('exhibitions/search/<str:keyword>', search_exhibition, name='search_exhibition'),

]
