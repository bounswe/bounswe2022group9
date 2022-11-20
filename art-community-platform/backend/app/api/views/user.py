from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import hashlib
import json

from ..helpers.comment_helpers import get_comment_by_id_helper
from ..helpers.exhibition_helpers import get_exhibition_by_id_helper
from ..helpers.notification_helpers import get_notification_by_id_helper
from ..helpers.tag_helpers import get_tag_by_id_helper
from ..helpers.art_item_helpers import *
from ..helpers.user_helpers import *
from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


@api_view(['GET'])
def get_user_by_id(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=401)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse('no api found with this id', status=404)

    art_items = []
    for art_item_id in u.art_items:
        art_items.append(get_art_item_by_id_helper(art_item_id))

    data = {"id": u.id, "username": u.username, "email": u.email, "birthdate": u.birthdate, "name": u.name,
            "art_items:": art_items, "profile_img_url": u.profile_img_url, "location": u.location}

    return JsonResponse(data)


@api_view(['GET'])
def get_followers_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no api found with this api id", status=404)

    if u.token != token:
        return HttpResponse("api id and token mismatch", status=401)

    followers = []
    for follower_id in u.followers:
        followers.append(get_follower_by_id_helper(follower_id))

    return JsonResponse({"followers": followers})


@api_view(['GET'])
def get_followings_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no api found with this api id", status=404)

    if u.token != token:
        return HttpResponse("api id and token mismatch", status=401)

    followings = []
    for following_id in u.followings:
        followings.append(get_follower_by_id_helper(following_id))

    return JsonResponse({"followings": followings})


@api_view(['GET'])
def get_favourites_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no api found with this api id", status=404)

    if u.token != token:
        return HttpResponse("api id and token mismatch", status=401)

    favourites = []
    for favourite_id in u.favourites:
        favourites.append(get_art_item_by_id_helper(favourite_id))

    return JsonResponse({"favourites": favourites})


@api_view(['GET'])
def get_comments_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no api found with this api id", status=404)

    if u.token != token:
        return HttpResponse("api id and token mismatch", status=401)

    comments = []
    for comment_id in u.comments:
        comments.append(get_comment_by_id_helper(comment_id))

    return JsonResponse({"comments": comments})


@api_view(['GET'])
def get_exhibitions_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no api found with this api id", status=404)

    if u.token != token:
        return HttpResponse("api id and token mismatch", status=401)

    exhibitions = []
    for exhibition_id in u.exhibitions:
        exhibitions.append(get_exhibition_by_id_helper(exhibition_id))

    return JsonResponse({"exhibitions": exhibitions})


@api_view(['GET'])
def get_notifications_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no api found with this api id", status=404)

    if u.token != token:
        return HttpResponse("api id and token mismatch", status=401)

    notifications = []
    for notification_id in u.notifications:
        notifications.append(get_notification_by_id_helper(notification_id))

    return JsonResponse({"notifications": notifications})

