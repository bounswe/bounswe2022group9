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
from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag
from ..models.notification import Notification


@api_view(['POST'])
def favourite(req):
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
        date = body['date']
    except:
        return HttpResponse("art item id or date is missing", status=400)

    try:
        u = User.objects.get(token=token)
    except:
        return HttpResponse('no user found with this token', status=404)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse('no art item to favourite found with this id', status=404)

    # append a.id to u.favourites
    try:
        favourites_of_u = u.favourites
        if a.id not in favourites_of_u:
            favourites_of_u.append(a.id)
        User.objects.filter(id=u.id).update(favourites=favourites_of_u)
    except:
        return HttpResponse('art item can not added to favourites of user', status=400)

    # append u.id to a.favourites
    try:
        favourites_of_a = a.favourites
        if u.id not in favourites_of_a:
            favourites_of_a.append(u.id)
        ArtItem.objects.filter(id=a.id).update(favourites=favourites_of_a)
    except:
        return HttpResponse('user can not added to favourites of art item', status=400)

    # TODO : send a notification to a.owner like 'u favourited your post a.id'
    try:
        art_item_owner = User.objects.get(id=a.owner_id)
        print("owner: ", str(art_item_owner.id))
        Notification.objects.create(receiver_id=int(art_item_owner.id),
                                    text=str(art_item_owner.username) + " favourited your post" + str(a.id),
                                    date=datetime.datetime.now())
    except Exception as e:
        print(e.messsage)
        return HttpResponse('couldnt send notification to the owner of the art but favouriting is successful',
                            status=400)

    return HttpResponse(status=200)
