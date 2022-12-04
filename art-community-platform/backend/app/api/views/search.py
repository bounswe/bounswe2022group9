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
def search_user(req, keyword):
    users_res = []
    user_list = User.objects.all()

    for u in user_list:
        try:
            if (keyword in u.name) or (keyword in u.username) or (keyword in u.email):
                flag = True
            else:
                flag = False
        except:
            flag = False

        if flag is True:
            users_res.append(get_follower_by_id_helper(u.id))

    return JsonResponse({"users": users_res})
