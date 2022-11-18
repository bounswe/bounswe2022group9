from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import hashlib
import json

from .helper_methods import get_tag_by_id_helper, get_art_item_by_id_helper
from .models import User, ArtItem, Tag
from . import validation_methods
from django.core.exceptions import ObjectDoesNotExist


@api_view(['GET'])
def health_check(request):
    return HttpResponse("Health check is successful, app is healthy.")


@api_view(['POST'])
def signup(req):
    data = json.loads(req.body)
    try:
        name = data['name']
        birthdate = data['birthdate']
        username = data['username']
        password = data['password']
        email = data['email']
    except:
        return HttpResponseBadRequest("missing fields")
    token = hashlib.sha256((username + password + email).encode('utf-8')).hexdigest()
    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()

    # email validation (e.g. does it have @ sign in it)
    is_email_valid, email_validation_msg = validation_methods.validate_email(email)
    if not is_email_valid:
        return HttpResponseBadRequest(email_validation_msg)

    # username validation
    is_username_valid, username_validation_msg = validation_methods.validate_username(username)
    if not is_username_valid:
        return HttpResponseBadRequest(username_validation_msg)

    # password validation
    is_password_valid, pass_validation_msg = validation_methods.validate_password(password)
    if not is_password_valid:
        return HttpResponseBadRequest(pass_validation_msg)

    # check if user is registered before, add new user if user isn't registered before
    try:
        obj = User.objects.get(email=email)
        return HttpResponseBadRequest("user with this email already exists")
    except:
        try:
            obj = User.objects.get(username=username)
            return HttpResponseBadRequest("user with this username already exists")
        except:
            User.objects.create(name=name, birthdate=birthdate, username=username, password=hashed_password,
                                email=email, token=token)
    return HttpResponse(status=201)


@api_view(['POST'])
def login(req):
    data = json.loads(req.body)

    try:
        username = data['username']
        password = data['password']
    except:
        return HttpResponseBadRequest("username or password is missing")

    try:
        u = User.objects.get(username=username)
    except:
        return HttpResponse('no user found with this username', status=400)

    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()

    if hashed_password != u.password:
        return HttpResponseBadRequest("wrong password")

    return JsonResponse({'token': u.token})


@api_view(['GET'])
def get_user_by_id(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=401)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse('no user found with this id', status=404)

    art_items = []
    for art_item_id in u.art_items:
        art_items.append(get_art_item_by_id_helper(art_item_id))

    data = {"id": u.id, "username": u.username, "email": u.email, "birthdate": u.birthdate, "name": u.name,
            "art_items:": art_items, "profile_img_url": u.profile_img_url, "location": u.location}

    return JsonResponse(data)


@api_view(['GET'])
def get_art_item_by_id(req, art_item_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse('no art item found with this id', status=404)

    try:
        u = User.objects.get(id=a.owner_id)
    except:
        return HttpResponse('no user found with this owner id', status=404)

    tags = []
    for tag_id in a.tags:
        tags.append(get_tag_by_id_helper(tag_id))

    if a.comments is not None:
        comment_count = len(a.comments)
    else:
        comment_count = 0

    if a.favourites is not None:
        favourite_count = len(a.favourites)
    else:
        favourite_count = 0

    data = {"id": a.id, "owner_name": u.name, "img_url": a.img_url, "description": a.description, "date": a.date,
            "tags:": tags, "comment_count": comment_count, "favourite_count": favourite_count}

    return JsonResponse(data)


@api_view(['GET'])
def get_tag_by_id(req, tag_id):
    try:
        t = Tag.objects.get(id=tag_id)
    except:
        return HttpResponse('no tag found with this id', status=404)

    return JsonResponse({"id": t.id, "text": t.text})
