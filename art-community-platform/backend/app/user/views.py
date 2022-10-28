import re

from django.shortcuts import render
from django.http import HttpResponse,HttpResponseBadRequest
from django.core.exceptions import BadRequest
from rest_framework.decorators import api_view
import hashlib
import json
import random
from .models import User
from .serializers import UserSerializer
from urllib import response
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
import validation_methods


@api_view(['GET'])
def health_check(request):
    return HttpResponse("Health check is successful, app is healthy.")


@api_view(['POST'])
def signup(req, is_json=True):
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

    try:
        obj = User.objects.get(email=email)
        return HttpResponseBadRequest("user with this email already exists")
        obj = User.objects.get(username=username)
        return HttpResponseBadRequest("user with this username already exists")
    except :
        User.objects.create(username=username, password=hashed_password, email=email, token=token)
    return HttpResponse("ok")


@api_view(['GET'])
def users(req):
    all_users = User.objects.all()  # fetch data from db
    serializer = UserSerializer(all_users, many=True)  # convert to JSON format
    return Response(serializer.data)
