from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import hashlib
import json

from ..helpers.comment_helpers import get_comment_by_id_helper
from ..helpers.exhibition_helpers import get_exhibition_by_id_helper
from ..helpers.notification_helpers import get_notification_by_id_helper
from ..helpers.tag_helpers import get_tag_by_id_helper
from ..helpers.art_item_helpers import *
from ..helpers.user_helpers import *
from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


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
    is_email_valid, email_validation_msg = validate_email_helper(email)
    if not is_email_valid:
        return HttpResponseBadRequest(email_validation_msg)

    # username validation
    is_username_valid, username_validation_msg = validate_username_helper(username)
    if not is_username_valid:
        return HttpResponseBadRequest(username_validation_msg)

    # password validation
    is_password_valid, pass_validation_msg = validate_password_helper(password)
    if not is_password_valid:
        return HttpResponseBadRequest(pass_validation_msg)

    # check if api is registered before, add new api if api isn't registered before
    try:
        obj = User.objects.get(email=email)
        return HttpResponseBadRequest("api with this email already exists")
    except:
        try:
            obj = User.objects.get(username=username)
            return HttpResponseBadRequest("api with this username already exists")
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
        return HttpResponse('no api found with this username', status=400)

    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()

    if hashed_password != u.password:
        return HttpResponseBadRequest("wrong password")

    return JsonResponse({'token': u.token})




@api_view(['POST'])
def favourite(req):
    data = json.loads(req.body)

    try:
        userID = data['userID']
        artItemID = data['artItemID']
    
    except:
        return HttpResponseBadRequest("userID or/and artItemID is missing")

    try:
        pass # Will be edited after bugs are fixed

    except: 
        pass # Will be edited after the bugs are fixed

