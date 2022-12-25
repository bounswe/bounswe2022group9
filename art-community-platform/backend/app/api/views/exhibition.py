import datetime

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
from ..models.exhibition import Exhibition
from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag
from ..models.notification import Notification


@api_view(['POST'])
def create_exhibition(req):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        body = json.loads(req.body)
    except:
        return HttpResponse('request body is missing', status=400)

    try:
        name = body['name']
        description = body['description']
        ex_type = body['type']
        location = body['location']
        open_address = body['open_address']
        start_time = body['start_time']
        end_time = body['end_time']
        date = body['date']
        art_item_ids = body['art_items']
    except:
        return HttpResponse("missing fields", status=400)

    try:
        u = User.objects.get(token=token)
    except:
        return HttpResponse('no user found with this token', status=404)

    try:
        e = Exhibition.objects.create(owner_id=u.id, name=name, description=description, type=ex_type,
                                      location=location, open_address=open_address, start_time=start_time,
                                      end_time=end_time, date=date, art_items=art_item_ids)
    except:
        return HttpResponse('exhibition can not created', status=400)

    # append e.id to u.exhibitions
    try:
        exhibitions_of_u = u.exhibitions
        if e.id not in exhibitions_of_u:
            exhibitions_of_u.append(e.id)
        User.objects.filter(id=u.id).update(exhibitions=exhibitions_of_u)
    except:
        return HttpResponse('exhibition can not added to exhibitions of user', status=400)

    # send a notification to each follower like 'u is started a new exhibition: e.id'
    for follower_id in u.followers:
        try:
            Notification.objects.create(receiver_id=int(follower_id),
                                        text=str(u.username) + " started a new exhibiton with id " + str(e.id),
                                        date=datetime.datetime.now())
        except:
            return HttpResponse('couldnt send notification to the followers of the user but exhibition starting is successful',
                                status=400)

    return HttpResponse(status=201)


@api_view(['GET'])
def get_exhibition_by_id(req, exhibition_id):
    try:
        e = Exhibition.objects.get(id=exhibition_id)
    except:
        return HttpResponse('no exhibition found with this id', status=404)

    try:
        owner = User.objects.get(id=e.owner_id)
    except:
        return HttpResponse('no owner found with this id', status=404)

    try:
        art_items = []
        for art_item_id in e.art_items:
            art_items.append(get_art_item_by_id_helper(art_item_id))
    except:
        return HttpResponse('art items of exhibition can not fetched', status=404)

    try:
        resp = {"id": e.id, "owner_name": owner.name, "type": e.type, "name": e.name, "description": e.description,
                "location": e.location, "open_address": e.open_address, "start_time": e.start_time,
                "end_time": e.end_time, "date": e.date, "art_items": art_items}
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse(resp)
