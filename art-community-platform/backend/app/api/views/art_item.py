import os

from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import json
import requests
import base64
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
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse('no art item found with this id', status=404)

    try:
        u = User.objects.get(id=a.owner_id)
    except:
        return HttpResponse('no user found with this owner id', status=404)

    try:
        comments = []
        for comment_id in a.comments:
            comments.append(get_comment_by_id_helper(comment_id))
    except:
        return HttpResponse('comments of art item can not fetched', status=404)

    if a.favourites is not None:
        favourite_count = len(a.favourites)
    else:
        favourite_count = 0

    try:
        resp = {"id": a.id, "owner_name": u.name, "img_url": a.img_url, "description": a.description, "date": a.date,
                "comments": comments, "tags:": a.tags, "comment_count": len(comments), "favourite_count": favourite_count}
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse(resp)


@api_view(['GET'])
def get_favourites_of_art_item(req, art_item_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse("no art item found with this id", status=404)

    try:
        favourites = []
        for uid in a.favourites:
            favourites.append(get_follower_by_id_helper(uid))
    except:
        return HttpResponse('favourites of art item can not fetched', status=404)

    return JsonResponse({"favourites": favourites})


@api_view(['GET'])
def get_comments_of_art_item(req, art_item_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse("no art item found with this id", status=404)

    try:
        comments = []
        for comment_id in a.comments:
            comments.append(get_comment_by_id_helper(comment_id))
    except:
        return HttpResponse('comments of art item can not fetched', status=404)

    return JsonResponse({"comments": comments})


@api_view(['POST'])
def create_art_item(req):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        body = json.loads(req.body)
    except:
        return HttpResponse('request body is missing', status=400)

    try:
        owner_id = body['owner_id']
        img_url = body['img_url']
        description = body['description']
        tags = body['tags']
        date = body['date']
    except:
        return HttpResponse("missing fields", status=400)

    try:
        u = User.objects.get(id=owner_id)
    except:
        return HttpResponse('no user found with this id', status=404)

    if u.token != token:
        return HttpResponse("owner id and token mismatch", status=401)

    try:
        a = ArtItem.objects.create(owner_id=owner_id, img_url=img_url,  description=description, date=date, tags=tags)
        a.save()
    except:
        return HttpResponse('art item can not created', status=400)

    try:
        art_items_of_u = u.art_items
        art_items_of_u.append(a.id)
        User.objects.filter(id=u.id).update(art_items=art_items_of_u)
    except:
        return HttpResponse('art item id can not added in art items of user', status=400)

    return HttpResponse(status=201)
