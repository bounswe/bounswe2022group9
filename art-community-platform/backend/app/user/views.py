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
    print("email is: ", email)
    m = re.match(r"(\w|\.)*@\w*.com", email)
    print("email is: ", email)
    if m is None:
        return HttpResponseBadRequest("email is invalid")
    print("email is: ", email)
    if len(username) < 5:
        return HttpResponseBadRequest("username can't be shorter than 5 characters")
    print("email is: ", email)
    if len(password) < 8:
        return HttpResponseBadRequest("password can't be shorter than 8 characters")
    lower = False
    upper = False
    digit = False
    for p in password:
        if ord("0") <= ord(p) <= ord("9"):
            digit = True
        if ord("a") <= ord(p) <= ord("z"):
            lower = True
        if ord("A") <= ord(p) <= ord("Z"):
            upper = True
    if not upper:
        return HttpResponseBadRequest("password should contain at least one upper case letter")
    if not lower:
        return HttpResponseBadRequest("password should contain at least one lower case letter")
    if not digit:
        return HttpResponseBadRequest("password should contain at least one numerical digit")
    try:
        print("trya girdik")
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
