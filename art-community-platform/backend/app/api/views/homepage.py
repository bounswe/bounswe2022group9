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
def get_homepage(req):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse("token is missing", status=401)

    try:
        u = User.objects.get(token=token)
    except:
        return HttpResponse("no user found with this token", status=404)

    art_items = []
    for following_id in u.followings:
        # find art item ids of user with this id
        try:
            f = User.objects.get(id=following_id)
        except:
            return HttpResponse("no user found with this id", status=404)

        try:
            for art_item_id in f.art_items:
                art_items.append(get_art_item_by_id_helper(art_item_id))
        except:
            return HttpResponse('art items can not fetched', status=404)

    art_items.sort(key=lambda item: item['date'], reverse=True)

    return JsonResponse({"art_items": art_items})
