from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import hashlib
import json
from ..helpers.user_helpers import *
from ..models.user import User


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
    try:
        body = json.loads(req.body)
    except:
        return HttpResponse('request body is missing', status=400)

    try:
        username = body['username']
        password = body['password']
    except:
        return HttpResponse('username or password is missing', status=400)

    try:
        u = User.objects.get(username=username)
    except:
        return HttpResponse('no user found with this username', status=404)

    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()

    if hashed_password != u.password:
        return HttpResponse('wrong password', status=400)

    try:
        resp = {'user_id': u.id, 'token': u.token}
    except:
        return HttpResponse('response can not created', status=404)

    return JsonResponse(resp)


