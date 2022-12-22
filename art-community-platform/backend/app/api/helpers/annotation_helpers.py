from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag
from ..models.annotation import Annotation
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse


def get_annotation_by_id_helper(annotation_id):
    try:
        a = Annotation.objects.get(id=annotation_id)
    except:
        return None

    return a.annotation
