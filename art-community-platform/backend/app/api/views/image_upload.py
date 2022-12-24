from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view


@api_view(['POST'])
def upload_image(req):
    # TODO: this method will be implemented to be used in create_art_item and update_profile_picture endpoints
    return JsonResponse({"img_url": "img_url"})
