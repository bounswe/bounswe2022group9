from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from ..models.annotation import Annotation
from ..models.user import User
from ..models.art_item import ArtItem


def get_annotation_by_id(annotation_id):
    try:
        a = Annotation.objects.get(id=annotation_id)
    except:
        return

    try:
        u = User.objects.get(id=a.owner_id)
    except:
        return

    try:
        art = ArtItem.objects.get(id=a.art_item_id)
    except:
        return

    return {"id": a.id, "owner_id": a.owner_id, "art_item_id": a.art_item_id, "annotation": a.annotation}


@api_view(['GET'])
def get_annotation_by_art_item_id(req, art_item_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        annotation = Annotation.objects.get(art_item_id=art_item_id)
    except:
        return HttpResponse('no annotation found with this id', status=404)

    try:
        resp = get_annotation_by_id(annotation.id)
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse(annotation.annotation)


@api_view(['GET'])
def get_all_art_items(req):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        annotations = Annotation.objects.all()
    except:
        return HttpResponse('all art items can not fetched', status=404)

    try:
        annotations_data = []
        for annotation in annotations:
            annotations_data.append(get_annotation_by_id(annotation.id))
    except:
        return HttpResponse('response can not created', status=404)

    annotations_data.sort(key=lambda item: item['id'], reverse=True)

    return JsonResponse({"annotation": annotations_data})
