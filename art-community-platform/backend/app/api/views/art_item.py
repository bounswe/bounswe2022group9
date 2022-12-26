import datetime

from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import json
from ..helpers.comment_helpers import get_comment_by_id_helper
from ..helpers.annotation_helpers import get_annotation_by_id_helper
from ..helpers.user_helpers import *
from ..models.user import User
from ..models.art_item import ArtItem
import cloudinary
import cloudinary.uploader
import cloudinary.api
from ..models.notification import Notification


@api_view(['GET'])
def get_all_art_items(req):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        art_items = ArtItem.objects.all()
    except:
        return HttpResponse('all art items can not fetched', status=404)

    try:
        art_items_data = []
        for art_item in art_items:
            art_items_data.append(get_art_item_by_id_helper(art_item.id))
    except:
        return HttpResponse('response can not created', status=404)

    art_items_data.sort(key=lambda item: item['id'], reverse=True)

    return JsonResponse({"art_items": art_items_data})


@api_view(['GET'])
def get_art_item_by_id(req, art_item_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse('no art item found with this id', status=404)

    try:
        u = User.objects.get(id=a.owner_id)
    except:
        return HttpResponse('no user found with this owner id', status=404)

    try:
        comments = []
        for comment_id in a.comments:
            comments.append(get_comment_by_id_helper(comment_id))
    except:
        return HttpResponse('comments of art item can not fetched', status=404)

    comments.sort(key=lambda item: item['id'], reverse=False)

    if a.favourites is not None:
        favourite_count = len(a.favourites)
    else:
        favourite_count = 0

    try:
        resp = {"id": a.id, "owner_id": u.id, "owner_name": u.name, "img_url": a.img_url, "description": a.description, "date": a.date,
                "comments": comments, "tags:": a.tags, "comment_count": len(comments), "favourite_count": favourite_count}
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse(resp)


@api_view(['GET'])
def get_favourites_of_art_item(req, art_item_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse("no art item found with this id", status=404)

    try:
        favourites = []
        for uid in a.favourites:
            favourites.append(get_follower_by_id_helper(uid))
    except:
        return HttpResponse('favourites of art item can not fetched', status=404)

    return JsonResponse({"favourites": favourites})


@api_view(['GET'])
def get_comments_of_art_item(req, art_item_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse("no art item found with this id", status=404)

    try:
        comments = []
        for comment_id in a.comments:
            comments.append(get_comment_by_id_helper(comment_id))
    except:
        return HttpResponse('comments of art item can not fetched', status=404)

    return JsonResponse({"comments": comments})


@api_view(['GET'])
def get_annotations_of_art_item(req, art_item_id):
    try:
        token = req.headers['Authorization']
    except:
        return HttpResponse('token is missing', status=401)

    try:
        art = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse("no art item found with this id", status=404)

    try:
        annotations = []
        for annotation_id in art.annotations:
            annotations.append(get_annotation_by_id_helper(annotation_id))
    except:
        return HttpResponse('annotations of art item can not fetched', status=404)

    return JsonResponse({"annotations": annotations})


@api_view(['POST'])
def create_art_item(req):
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
        img_base64 = body['img_base64']
        description = body['description']
        tags = body['tags']
        date = body['date']
    except:
        return HttpResponse("missing fields", status=400)

    try:
        u = User.objects.get(id=owner_id)
    except:
        return HttpResponse('no user found with this id', status=404)

    if u.token != token:
        return HttpResponse("owner id and token mismatch", status=401)

    cloudinary.config(
        cloud_name="do0e4xvp8",
        api_key="999946577192328",
        api_secret="aVAettwhPS5SNq74ReNSRAnBCfg"
    )

    cloudinary.uploader.upload(img_base64, public_id=description)
    img_url = cloudinary.CloudinaryImage(description).build_url()

    try:
        a = ArtItem.objects.create(owner_id=owner_id, img_url=img_url,
                                   description=description, date=date, tags=tags)
        a.save()
    except:
        return HttpResponse('art item can not created', status=400)

    try:
        art_items_of_u = u.art_items
        art_items_of_u.append(a.id)
        User.objects.filter(id=u.id).update(art_items=art_items_of_u)
    except:
        return HttpResponse('art item id can not added in art items of user', status=400)

    # send a notification to each follower like 'u is shared a new art item a.id'
    for follower_id in u.followers:
        try:
            Notification.objects.create(receiver_id=int(follower_id),
                                        text=str(u.username) + " shared a new post with id " + str(a.id),
                                        date=datetime.datetime.now())
        except Exception as e:
            print(e.messsage)
            return HttpResponse('couldnt send notification to the followers of the user but art sharing is successful',
                                 status=400)

    return HttpResponse(status=201)


