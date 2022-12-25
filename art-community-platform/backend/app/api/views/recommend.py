from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view

from ..helpers.recommendation_helpers import *
from ..helpers.art_item_helpers import *
from ..helpers.user_helpers import *
from ..models.user import User
from ..models.art_item import ArtItem


@api_view(['GET'])
def recommend_art_items(req, user_id):
    u = None
    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse('no user found with this id', status=404)
    if is_new_user_for_art_recommendation(u):
        return JsonResponse({"recommendations": popular_art_items()})
    else:
        tags = get_tags_of_favourites()
        arts = ArtItem.objects.all()
        art_items_to_recommend = []
        for art in arts:
            if set(art.tags).intersection(tags):
                art_items_to_recommend.append(get_art_item_by_id_helper(art.id))
        return JsonResponse({"recommendations" : list(art_items_to_recommend)})



