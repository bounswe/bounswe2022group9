from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from rest_framework.decorators import api_view
import hashlib
import json
from .models import User
from . import validation_methods
from django.core.exceptions import ObjectDoesNotExist


@api_view(['GET'])
def health_check(request):
    return HttpResponse("Health check is successful, app is healthy.")


@api_view(['POST'])
def signup(req):
    data = json.loads(req.body)
    try:
        username = data['username']
        password = data['password']
        email = data['email']
    except:
        return HttpResponseBadRequest("missing fields")
    token = hashlib.sha256((username+password+email).encode('utf-8')).hexdigest()
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
            User.objects.create(username=username, password=hashed_password, email=email, token=token)
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
        return HttpResponseBadRequest("no user found with this username")

    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()

    if hashed_password != u.password:
        return HttpResponseBadRequest("wrong password")

    return JsonResponse({'token': u.token})
