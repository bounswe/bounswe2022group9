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
def get_comment_by_id(req, comment_id):
    try:
        c = Comment.objects.get(id=comment_id)
    except:
        return HttpResponse('no comment found with this id', status=404)

    try:
        u = User.objects.get(id=c.owner_id)
    except:
        return HttpResponse('no comment owner found with this owner id', status=404)

    try:
        resp = {"id": c.id, "owner_name": u.name, "text": c.text, "date": c.date}
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse(resp)


@api_view(['POST'])
def comment(req):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        body = json.loads(req.body)
    except:
        return HttpResponse("request body is missing", status=400)

    try:
        art_item_id = body['art_item_id']
        text = body['text']
        date = body['date']
    except:
        return HttpResponse("art item id, comment text or date is missing", status=400)

    try:
        u = User.objects.get(token=token)
    except:
        return HttpResponse('no user found with this token', status=404)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse('no art item to favourite found with this id', status=404)

    try:
        c = Comment.objects.create(owner_id=u.id, text=text, date=date)
        c.save()
    except:
        return HttpResponse('comment can not created', status=400)

    # append c.id to u.comments
    try:
        comments_of_u = u.comments
        if c.id not in comments_of_u:
            comments_of_u.append(c.id)
        User.objects.filter(id=u.id).update(comments=comments_of_u)
    except:
        return HttpResponse('comment can not added to comments of user', status=400)

    # append c.id to a.comments
    try:
        comments_of_a = a.comments
        if c.id not in comments_of_a:
            comments_of_a.append(c.id)
        ArtItem.objects.filter(id=a.id).update(comments=comments_of_a)
    except:
        return HttpResponse('comment can not added to comments of art item', status=400)

    # TODO : send a notification to a.owner like 'u commented on your post a.id a.text'

    return HttpResponse(status=200)
