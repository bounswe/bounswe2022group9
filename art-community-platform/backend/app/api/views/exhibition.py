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


@api_view(['POST'])
def create_exhibition(req):
    data = json.loads(req.body)
    try:
        owner_id = data['owner_id']
        ex_type = data['type']
        location = data['location']
        date = data['date']
        art_item_ids = data['art_items']
    except:
        return HttpResponse("missing fields", status=400)

    try:
        # TODO: Tag will change to Exhibition
        e = Tag.objects.create(owner_id=owner_id, type=ex_type, location=location, date=date, art_items=art_item_ids)
    except:
        return HttpResponse('exhibition can not created', status=400)

    try:
        owner = User.objects.get(id=e.owner_id)
    except:
        return HttpResponse('no owner found with this id', status=404)

    art_items = []
    for art_item_id in art_item_ids:
        art_items.append(get_art_item_by_id_helper(art_item_id))

    return JsonResponse({"id": e.id, "owner_name": owner.name, "type": e.type,
                         "location": e.location, "date": e.date, "art_items": art_items})


@api_view(['GET'])
def get_exhibition_by_id(req, exhibition_id):

    return JsonResponse({"id": exhibition_id, "exhibition": "exhibition"})
