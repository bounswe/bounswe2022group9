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
def follow(req):
    try:
        data = json.loads(req.body)
    except:
        return HttpResponse("request body is missing", status=400)

    try:
        user_id = data['user_id']
        token = data['token']
        followed_user_id = data['followed_user_id']
        date = data['date']
    except:
        return HttpResponse("api id, token, followed api id or date is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse('no api found with this id', status=404)

    if u.token != token:
        return HttpResponse("api id and token mismatch", status=401)

    try:
        f = User.objects.get(id=followed_user_id)
    except:
        return HttpResponse('no api to follow found with this id', status=404)

    # append u.id to f.followers
    try:
        followers_of_f = f.followers
        followers_of_f.append(u.id)
        User.objects.filter(id=f.id).update(followers=followers_of_f)
    except:
        return HttpResponse('f nin takipcilerine u yu ekleyemedi', status=400)

    # append f.id to u.followings
    try:
        followings_of_u = u.followings
        followings_of_u.append(f.id)
        User.objects.filter(id=u.id).update(followings=followings_of_u)
    except:
        return HttpResponse('u nun takip ettiklerine f yi ekleyemedi', status=400)

    # TODO : send a notification to f like 'u started following you'

    return HttpResponse(status=200)

