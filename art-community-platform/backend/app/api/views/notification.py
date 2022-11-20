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
def get_notification_by_id(req, notification_id):
    # TODO: Tag will change to Notification
    try:
        n = Tag.objects.get(id=notification_id)
    except:
        return HttpResponse('no notification found with this id', status=404)

    return JsonResponse({"id": n.id, "text": n.text, "date": n.date})

