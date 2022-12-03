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
def searchTag(req,keyword):

    tagIds = []

    tags = Tag.objects.all()
    for tag in tags:
        text = tag.text
        flag = False

        try:
            if keyword in text:
                flag = True
        
        except:
            return HttpResponse('no Tag found', status=404)
        
        if flag == True:
            tagIds.append(get_tag_by_id_helper(tag.pk))

    
    tagList = json.dumps(tagIds)

    return tagList

