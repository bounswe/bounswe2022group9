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
def get_art_item_by_id(req, art_item_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse('no art item found with this id', status=404)

    try:
        u = User.objects.get(id=a.owner_id)
    except:
        return HttpResponse('no user found with this owner id', status=404)

    tags = []
    for tag_id in a.tags:
        tags.append(get_tag_by_id_helper(tag_id))

    if a.comments is not None:
        comment_count = len(a.comments)
    else:
        comment_count = 0

    if a.favourites is not None:
        favourite_count = len(a.favourites)
    else:
        favourite_count = 0

    data = {"id": a.id, "owner_name": u.name, "img_url": a.img_url, "description": a.description, "date": a.date,
            "tags:": tags, "comment_count": comment_count, "favourite_count": favourite_count}

    return JsonResponse(data)


@api_view(['GET'])
def get_favourites_of_art_item(req, art_item_id):
    data = json.loads(req.body)
    try:
        user_id = data['user_id']
        token = data['token']
    except:
        return HttpResponse("user id or token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this id", status=404)

    if u.token != token:
        return HttpResponse("user id and token mismatch", status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse("no art item found with this id", status=404)

    favourites = []
    for uid in a.favourites:
        favourites.append(get_follower_by_id_helper(uid))

    return JsonResponse({"favourites": favourites})


@api_view(['GET'])
def get_comments_of_art_item(req, art_item_id):
    data = json.loads(req.body)
    try:
        user_id = data['user_id']
        token = data['token']
    except:
        return HttpResponse("api id or token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no api found with this id", status=404)

    if u.token != token:
        return HttpResponse("api id and token mismatch", status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse("no art item found with this id", status=404)

    comments = []
    for comment_id in a.comments:
        comments.append(get_comment_by_id_helper(comment_id))

    return JsonResponse({"comments": comments})
