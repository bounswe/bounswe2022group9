from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from ..models.annotation import Annotation
from ..models.user import User
from ..models.art_item import ArtItem
import json
import uuid

"""
{
  "@context": "http://www.w3.org/ns/anno.jsonld",
  "id": "http://example.org/anno4",
  "type": "Annotation",
  "body": "http://example.org/description1",
  "target": {
    "id": "http://example.com/image1#xywh=100,100,300,300",
    "type": "Image",
    "format": "image/jpeg"
  }
}
"""

@api_view(['GET'])
def get_annotation_by_id(req, annotation_id):
    try:
        a = Annotation.objects.get(id=annotation_id)
    except:
        return HttpResponse('no annotation found with this id', status=404)

    try:
        u = User.objects.get(id=a.owner_id)
    except:
        return HttpResponse('no user found with this id', status=404)

    try:
        art = ArtItem.objects.get(id=a.art_item_id)
    except:
        return HttpResponse('no art item found with this id', status=404)

    return JsonResponse(a.annotation)

@api_view(['POST'])
def create_annotation(req):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        body = json.loads(req.body)
    except:
        return HttpResponse('request body is missing', status=400)

    try:
        owner_id = body['owner_id']
        art_item_id = body['art_item_id']
        annotation_comment = body['annotation_comment']
        annotation_type = body['annotation_type']
        annotation_format = body['annotation_format']
        annotation_source = body['annotation_source']
    except:
        return HttpResponse("missing fields", status=400)

    try:
        u = User.objects.get(id=owner_id)
        art = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse('no user or art item found with this id', status=404)

    annotation = {
        "@context": "http://www.w3.org/ns/anno.jsonld",
        "id": uuid.uuid4().hex,
        "type": "Annotation",
        "body": {
            "type": "TextualBody",
            "value": annotation_comment,
            "purpose": "commenting"
        },
        "target": {
            "id": annotation_source,
            "type": annotation_type,
            "format": annotation_format
        }
    }

    try:
        a = Annotation.objects.create(owner_id=owner_id, art_item_id=art_item_id, annotation=annotation)
        a.save()
    except:
        return HttpResponse('annotation can not created', status=400)

    # add annotation to art item

    return HttpResponse(status=201)

@api_view(['PUT'])
def update_annotation(req, annotation_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        body = json.loads(req.body)
    except:
        return HttpResponse('request body is missing', status=400)

    try:
        owner_id = body['owner_id']
        art_item_id = body['art_item_id']
        annotation_comment = body['annotation_comment']
        annotation_type = body['annotation_type']
        annotation_format = body['annotation_format']
        annotation_source = body['annotation_source']
    except:
        return HttpResponse("missing fields", status=400)

    try:
        u = User.objects.get(id=owner_id)
        art = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse('no user or art item found with this id', status=404)

    try:
        a = Annotation.objects.get(id=annotation_id)
    except:
        return HttpResponse('annotation can not fetched', status=400)

    annotation = {
        "@context": "http://www.w3.org/ns/anno.jsonld",
        "id": a.annotation['id'],
        "type": "Annotation",
        "body": {
            "type": "TextualBody",
            "value": annotation_comment,
            "purpose": "commenting"
        },
        "target": {
            "id": annotation_source,
            "type": annotation_type,
            "format": annotation_format
        }
    }

    try:
        Annotation.objects.filter(id=annotation_id).update(annotation=annotation)
    except:
        return HttpResponse('annotation can not updated', status=400)

    return HttpResponse(status=200)


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
