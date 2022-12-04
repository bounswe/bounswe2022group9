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
from ..models.exhibition import Exhibition


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



@api_view(['GET'])
def search_art_item(req,keyword):

    itemList = []

    arts = ArtItem.objects.all()

    for item in arts:
        desc = item.description
        tags = item.tags

        flag = False

        try:
            if keyword in desc:
                flag = True
        except:
            return HttpResponse('no Art Item found', status=404)


        for tag in tags:
            if keyword in tag:
                flag = True

        
        if flag is True:
            itemList.append(get_art_item_by_id_helper(item.id))

    

    return JsonResponse({"art_items":itemList})


@api_view(['GET'])
def search_exhibiton(req,keyword):
    exhibition_list = []

    exhibitions = Exhibition.objects.all()

    for exhibition in exhibitions:
        name  = exhibition.name
        desc = exhibition.description
        address = exhibition.open_address
        
        flag = False

        try:
            if keyword in name or keyword in desc or keyword in address:
                flag = True
            else:
                flag  = False
        
        except:
            return HttpResponse('no Exhibition found', status=404)

        if flag is True:
            exhibition_list.append(get_exhibition_by_id_helper(exhibition.id))

    
    return JsonResponse({"exhibitions":exhibition_list})



