from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import hashlib
import json

from .helper.comment_helpers import get_comment_by_id_helper
from .helper.exhibition_helpers import get_exhibition_by_id_helper
from .helper.notification_helpers import get_notification_by_id_helper
from .helper.tag_helpers import get_tag_by_id_helper
from .helper.art_item_helpers import get_art_item_by_id_helper
from .helper.user_helpers import get_user_by_id_helper, get_follower_by_id_helper
from .models import User, ArtItem, Tag, Comment
from . import validation_methods


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


@api_view(['GET'])
def get_comment_by_id(req, comment_id):
    try:
        c = Comment.objects.get(id=comment_id)
    except:
        return HttpResponse('no comment found with this id', status=404)

    try:
        u = User.objects.get(id=c.owner_id)
    except:
        return HttpResponse('no user found with this owner id', status=404)

    return JsonResponse({"id": c.id, "owner_name": u.name, "text": c.text, "date": c.date})


@api_view(['GET'])
def get_exhibition_by_id(req, exhibition_id):

    return JsonResponse({"id": exhibition_id, "exhibition": "exhibition"})


@api_view(['GET'])
def get_notification_by_id(req, notification_id):

    return JsonResponse({"id": notification_id, "notification": "notification"})


@api_view(['GET'])
def get_followers_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this user id", status=404)

    if u.token != token:
        return HttpResponse("user id and token mismatch", status=401)

    followers = []
    for follower_id in u.followers:
        followers.append(get_follower_by_id_helper(follower_id))

    return JsonResponse({"followers": followers})


@api_view(['GET'])
def get_followings_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this user id", status=404)

    if u.token != token:
        return HttpResponse("user id and token mismatch", status=401)

    followings = []
    for following_id in u.followings:
        followings.append(get_follower_by_id_helper(following_id))

    return JsonResponse({"followings": followings})


@api_view(['GET'])
def get_favourites_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this user id", status=404)

    if u.token != token:
        return HttpResponse("user id and token mismatch", status=401)

    favourites = []
    for favourite_id in u.favourites:
        favourites.append(get_art_item_by_id_helper(favourite_id))

    return JsonResponse({"favourites": favourites})


@api_view(['GET'])
def get_comments_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this user id", status=404)

    if u.token != token:
        return HttpResponse("user id and token mismatch", status=401)

    comments = []
    for comment_id in u.comments:
        comments.append(get_comment_by_id_helper(comment_id))

    return JsonResponse({"comments": comments})


@api_view(['GET'])
def get_exhibitions_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this user id", status=404)

    if u.token != token:
        return HttpResponse("user id and token mismatch", status=401)

    exhibitions = []
    for exhibition_id in u.exhibitions:
        exhibitions.append(get_exhibition_by_id_helper(exhibition_id))

    return JsonResponse({"exhibitions": exhibitions})


@api_view(['GET'])
def get_notifications_of_user(req, user_id):
    data = json.loads(req.body)
    try:
        token = data['token']
    except:
        return HttpResponse("token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this user id", status=404)

    if u.token != token:
        return HttpResponse("user id and token mismatch", status=401)

    notifications = []
    for notification_id in u.notifications:
        notifications.append(get_notification_by_id_helper(notification_id))

    return JsonResponse({"notifications": notifications})


@api_view(['GET'])
def get_favourites_of_art_item(req, art_item_id):
    data = json.loads(req.body)
    try:
        user_id = data['user_id']
        token = data['token']
    except:
        return HttpResponse("user id or token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this id", status=404)

    if u.token != token:
        return HttpResponse("user id and token mismatch", status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse("no art item found with this id", status=404)

    favourites = []
    for uid in a.favourites:
        favourites.append(get_follower_by_id_helper(uid))

    return JsonResponse({"favourites": favourites})


@api_view(['GET'])
def get_comments_of_art_item(req, art_item_id):
    data = json.loads(req.body)
    try:
        user_id = data['user_id']
        token = data['token']
    except:
        return HttpResponse("user id or token is missing", status=400)

    try:
        u = User.objects.get(id=user_id)
    except:
        return HttpResponse("no user found with this id", status=404)

    if u.token != token:
        return HttpResponse("user id and token mismatch", status=401)

    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return HttpResponse("no art item found with this id", status=404)

    comments = []
    for comment_id in a.comments:
        comments.append(get_comment_by_id_helper(comment_id))

    return JsonResponse({"comments": comments})


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
