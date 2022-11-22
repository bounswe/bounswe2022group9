from django.contrib.postgres.search import SearchVector
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import hashlib
import json

from ..helpers.comment_helpers import get_comment_by_id_helper
from ..helpers.exhibition_helpers import get_exhibition_by_id_helper
from ..helpers.notification_helpers import get_notification_by_id_helper
from ..helpers.search_helpers import search_users_helper
from ..helpers.tag_helpers import get_tag_by_id_helper
from ..helpers.art_item_helpers import *
from ..helpers.user_helpers import *
from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


@api_view(['GET'])
def search_in_users(req):

    q = req.GET.get('q', '')

    data = list(search_users_helper(q))

    return JsonResponse({'data': data})


@api_view(['GET'])
def search_in_art_items(req):

    q = req.GET.get('q', '')

    return JsonResponse({"query": q})


@api_view(['GET'])
def search_in_exhibitions(req):

    q = req.GET.get('q', '')

    return JsonResponse({"query": q})

