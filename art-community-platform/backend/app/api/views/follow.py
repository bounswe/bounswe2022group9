from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import hashlib
import json
from ..helpers.user_helpers import *

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


@api_view(['POST'])
def follow(req):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        body = json.loads(req.body)
    except:
        return HttpResponse("request body is missing", status=400)

    try:
        followed_user_id = body['followed_user_id']
        date = body['date']
    except:
        return HttpResponse("followed user id or date is missing", status=400)

    try:
        u = User.objects.get(token=token)
    except:
        return HttpResponse('no user found with this token', status=404)

    try:
        f = User.objects.get(id=followed_user_id)
    except:
        return HttpResponse('no user to follow found with this id', status=404)

    # append u.id to f.followers
    try:
        followers_of_f = f.followers
        if u.id not in followers_of_f:
            followers_of_f.append(u.id)
        User.objects.filter(id=f.id).update(followers=followers_of_f)
    except:
        return HttpResponse('u can not added to followers of f', status=400)

    # append f.id to u.followings
    try:
        followings_of_u = u.followings
        if f.id not in followings_of_u:
            followings_of_u.append(f.id)
        User.objects.filter(id=u.id).update(followings=followings_of_u)
    except:
        return HttpResponse('f can not added to followings of u', status=400)

    # TODO : send a notification to f like 'u started following you'

    return HttpResponse(status=200)

@api_view(['POST'])
def unfollow(req):
    """
    there is follower and followed.
    follower is following the followed.
    we will delete follower from followers list of the followed (use helper function)
    we will delete followed from followings list of the follower (use helper function)
    """
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        body = json.loads(req.body)
    except:
        return HttpResponse("request body is missing", status=400)

    followed_id = None
    try:
        followed_id = body['followed_user_id']
    except:
        return HttpResponse("followed user id is missing", status=400)

    follower_id = None
    try:
        u = User.objects.get(token=token)
        follower_id = u.id
    except:
        return HttpResponse('no user found with this token', status=404)

    result = delete_user_from_following(follower_id, followed_id)
    result2 = delete_user_from_followers(follower_id, followed_id)

    if not result2[0]:
        result[0] = False

    if result[0]:
        return HttpResponse(status=200)
    return HttpResponse(result[1], status=400)

