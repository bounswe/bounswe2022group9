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


@api_view(['GET'])
def get_all_users(req):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        users = User.objects.all()
    except:
        return HttpResponse('all users can not fetched', status=404)

    try:
        users_data = []
        for user in users:
            users_data.append({"id": user.id, "username": user.username,
                               "name": user.name, "profile_img_url": user.profile_img_url})
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse({"users": users_data})


@api_view(['GET'])
def get_user_by_id(req, user_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        request_sender = User.objects.get(token=token)
    except:
        return HttpResponse('request sender not found with this token', status=404)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse('no user found with this id', status=404)

    try:
        art_items = []
        for art_item_id in u.art_items:
            art_items.append(get_art_item_by_id_helper(art_item_id))
    except:
        return HttpResponse('art items of user can not fetched', status=404)

    is_following = False
    if user_id in request_sender.followings:
        is_following = True

    try:
        resp = {"id": u.id, "username": u.username, "email": u.email,
                "birthdate": u.birthdate, "name": u.name, "art_items:": art_items,
                "profile_img_url": u.profile_img_url, "location": u.location, "is_following": is_following}
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse(resp)


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

    exhibitions = []
    for exhibition_id in u.exhibitions:
        exhibitions.append(get_exhibition_by_id_simple(exhibition_id))

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


@api_view(['POST'])
def update_profile_info(req, user_id):
    data = json.loads(req.body)
    try:
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
    user.birthdate = birthdate
    user.location = location
    user.name = name
    user.save()
    return HttpResponse(status=200)


@api_view(['POST'])
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
