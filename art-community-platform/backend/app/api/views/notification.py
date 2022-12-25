from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import json


from ..models.notification import Notification
from ..models.user import User
from ..helpers.notification_helpers import get_notification_by_receiver_id_helper



@api_view(['GET'])
def get_notification_by_id(req, notification_id):
    try:
        n = Notification.objects.get(id=notification_id)
    except:
        return HttpResponse('no notification found with this id', status=404)

    try:
        resp = {"id": n.id, "receiver_id": n.receiver_id, "text": n.text, "date": n.date}
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse(resp)


@api_view(['GET'])
def get_notification_by_receiver_id(req, receiver_id):
    # check if receiver id is valid
    try:
        u = User.objects.get(id=receiver_id)
    except:
        return HttpResponseBadRequest("no such user with given id")
    # return notifications coming to the user
    result = []
    try:
        result = get_notification_by_receiver_id_helper(receiver_id)
    except Exception as e:
        print(e.message)
    try:
        return JsonResponse({"notifications": result})
    except Exception as e:
        print(e.message)
        return result

