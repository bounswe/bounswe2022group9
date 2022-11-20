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
def create_tag(req):
    data = json.loads(req.body)
    try:
        text = data['text']
    except:
        return HttpResponse("tag content is missing", status=400)

    try:
        t = Tag.objects.create(text=text)
    except:
        return HttpResponse('tag can not created', status=400)

    return JsonResponse({"id": t.id, "text": t.text})


@api_view(['GET'])
def get_tag_by_id(req, tag_id):
    try:
        t = Tag.objects.get(id=tag_id)
    except:
        return HttpResponse('no tag found with this id', status=404)

    return JsonResponse({"id": t.id, "text": t.text})

