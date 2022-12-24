from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
from ..helpers.comment_helpers import get_comment_by_id_helper
from ..helpers.exhibition_helpers import get_exhibition_by_id_helper, get_exhibition_by_id_simple
from ..helpers.notification_helpers import get_notification_by_id_helper
from ..helpers.user_helpers import *
from ..models.user import User


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

    art_items.sort(key=lambda item: item['id'], reverse=True)

    is_following = False
    if user_id in request_sender.followings:
        is_following = True

    followers = get_followers_by_user_id_helper(user_id=user_id)
    followings = get_followings_by_user_id_helper(user_id=user_id)
    art_item_list = get_art_items_by_user_id_helper(user_id=user_id)

    followers_count = len(followers["followers"])
    followings_count = len(followings["followings"])
    art_item_count = len(art_item_list["art_items"])

    try:
        user_level = (len(u.comments) + art_item_count) / 5
    except:
        user_level = 1

    try:
        resp = {"id": u.id, "username": u.username, "email": u.email,
                "birthdate": u.birthdate, "name": u.name, "art_items:": art_items,
                "profile_img_url": u.profile_img_url, "location": u.location, "is_following": is_following,
                "follower_count":followers_count,"following_count":followings_count,
                "art_item_count":art_item_count, "user_level": user_level}
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse(resp)


@api_view(['GET'])
def get_followers_of_user(req, user_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse('no user found with this id', status=404)

    try:
        followers = []
        for follower_id in u.followers:
            followers.append(get_follower_by_id_helper(follower_id))
    except:
        return HttpResponse('followers of user can not fetched', status=404)

    return JsonResponse({"followers": followers})


@api_view(['GET'])
def get_followings_of_user(req, user_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this id", status=404)

    try:
        followings = []
        for following_id in u.followings:
            followings.append(get_follower_by_id_helper(following_id))
    except:
        return HttpResponse('followings of user can not fetched', status=404)

    return JsonResponse({"followings": followings})


@api_view(['GET'])
def get_favourites_of_user(req, user_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this id", status=404)

    try:
        favourites = []
        for favourite_id in u.favourites:
            favourites.append(get_art_item_by_id_helper(favourite_id))
    except:
        return HttpResponse('favourites of user can not fetched', status=404)

    return JsonResponse({"favourites": favourites})


@api_view(['GET'])
def get_comments_of_user(req, user_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this id", status=404)

    try:
        comments = []
        for comment_id in u.comments:
            comments.append(get_comment_by_id_helper(comment_id))
    except:
        return HttpResponse('comments of user can not fetched', status=404)

    return JsonResponse({"comments": comments})


@api_view(['GET'])
def get_exhibitions_of_user(req, user_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this id", status=404)

    try:
        exhibitions = []
        for exhibition_id in u.exhibitions:
            exhibitions.append(get_exhibition_by_id_simple(exhibition_id))
    except:
        return HttpResponse('exhibitions of user can not fetched', status=404)

    return JsonResponse({"exhibitions": exhibitions})


@api_view(['GET'])
def get_notifications_of_user(req, user_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this id", status=404)

    if u.token != token:
        return HttpResponse("user id and token mismatch", status=401)

    try:
        notifications = []
        for notification_id in u.notifications:
            notifications.append(get_notification_by_id_helper(notification_id))
    except:
        return HttpResponse('notifications of user can not fetched', status=404)

    return JsonResponse({"notifications": notifications})

