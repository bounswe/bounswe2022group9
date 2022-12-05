from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import hashlib
import json

from ..helpers.comment_helpers import get_comment_by_id_helper
from ..helpers.exhibition_helpers import get_exhibition_by_id_helper, get_exhibition_by_id_simple
from ..helpers.notification_helpers import get_notification_by_id_helper
from ..helpers.tag_helpers import get_tag_by_id_helper
from ..helpers.art_item_helpers import *
from ..helpers.user_helpers import *
from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


@api_view(['POST'])
def update_profile_info(req, user_id):
    data = json.loads(req.body)

    try:
        profile_img_url = data['profile_img_url']
        email = data['email']
        birthdate = data['birthdate']
        location = data['location']
        name = data['name']
    except:
        return HttpResponseBadRequest("missing fields")

    user = None

    try:
        user = User.objects.get(id=user_id)
    except:
        return HttpResponseBadRequest("user with given id doesn't exist")

    user.profile_img_url = profile_img_url
    user.birthdate = birthdate
    user.location = location
    user.name = name
    user.save()

    return HttpResponse(status=200)


@api_view(['GET'])
def get_profile_info(req, user_id):
    user = None
    try:
        user = User.objects.get(id=user_id)
    except:
        return HttpResponseBadRequest("user with given id doesn't exist")
    art_items = []
    try:
        for art_item_id in user.art_items:
            art_items.append(get_art_item_by_id_helper(art_item_id))
    except Exception as e:
        print(e)

    data = None
    follower_count = None
    try:
        follower_count = len(user.followers)
    except:
        follower_count = 0
    following_count = None
    try:
        following_count = len(user.followings)
    except:
        following_count = 0
    data = {"id": user.id, "username": user.username, "email": user.email, "birthdate": user.birthdate,
            "name": user.name,
            "art_items": art_items,
            "follower_count": follower_count,
            "following_count": following_count,
            "profile_img_url": user.profile_img_url, "location": user.location, "password": user.password}
    return JsonResponse(data)