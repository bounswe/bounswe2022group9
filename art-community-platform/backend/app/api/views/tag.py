from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import json
from ..models.tag import Tag


@api_view(['POST'])
def create_tag(req):
    data = json.loads(req.body)
    try:
        text = data['text']
    except:
        return HttpResponse("tag content is missing", status=400)

    try:
        t = Tag.objects.create(text=text)
    except:
        return HttpResponse('tag can not created', status=400)

    return JsonResponse({"id": t.id, "text": t.text})


@api_view(['GET'])
def get_tag_by_id(req, tag_id):
    try:
        t = Tag.objects.get(id=tag_id)
    except:
        return HttpResponse('no tag found with this id', status=404)

    try:
        resp = {"id": t.id, "text": t.text}
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse(resp)

