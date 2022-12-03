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
def searchUser(req,keyword):

    userIDs = []
    userList = User.objects.all()
    for usr in userList:
        name = usr.name
        username = usr.username
        email = usr.email
        flag = False

        try:
            if keyword in name:
                flag = True
        except:
            return HttpResponse('no user found', status=404)

        
        try:
            if keyword in username:
                flag=  True
        except:
            return HttpResponse('no user found', status=404)

        try:
            if keyword in email:
                flag = True
        
        except:
            return HttpResponse('no user found', status=404)


        if flag == True:
            userIDs.append(get_user_by_id_helper(usr.pk))

    jsonList = json.dumps(userIDs)
    return jsonList


        
    