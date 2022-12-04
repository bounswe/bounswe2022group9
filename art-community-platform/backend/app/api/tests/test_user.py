from django.test import TestCase, Client
from django.test.client import RequestFactory
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random

from ..views.auth import signup
from ..views.user import *

fake = Faker()

owner_id = fake.id()
img_url = fake.url()
description = fake.description()
date = fake.date()
tags = ['a', 'b', 'c']

username = fake.username()
password = fake.password()
email = fake.email()
name = fake.name()
birthdate = fake.date()

text = fake.text()

token = hashlib.sha256((username + password + email).encode('utf-8')).hexdigest()
header = {"HTTP_AUTHORIZATION": token}


class TestUser(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.user = User.objects.create(name=name, birthdate=birthdate, username=username,
                                        password=password, email=email, token=token)

    def test_get_all_users(self):
        request = self.factory.get('/api/v1/users', **header)

        response = get_all_users(request)
        self.assertEqual(response.status_code, 200)

    def test_get_user_by_id(self):
        request = self.factory.get('/api/v1/users/1', **header)

        response = get_user_by_id(request, self.user.id)
        res_json = json.loads(response.content)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(res_json['name'], name)
        self.assertEqual(res_json['username'], username)
        self.assertEqual(res_json['password'], password)
        self.assertEqual(res_json['email'], email)
        self.assertEqual(res_json['birthdate'], birthdate)

    def test_get_followers_of_users(self):
        request = self.factory.get('/api/v1/users/1/followers', **header)

        response = get_followers_of_user(request)
        self.assertEqual(response.status_code, 200)

    def test_get_followings_of_users(self):
        request = self.factory.get('/api/v1/users/1/followings', **header)

        response = get_followings_of_user(request)
        self.assertEqual(response.status_code, 200)

    def test_get_favourites_of_users(self):
        request = self.factory.get('/api/v1/users/1/favourites', **header)

        response = get_favourites_of_user(request)
        self.assertEqual(response.status_code, 200)

    def test_get_comments_of_users(self):
        request = self.factory.get('/api/v1/users/1/comments', **header)

        response = get_comments_of_user(request)
        self.assertEqual(response.status_code, 200)

    def test_get_exhibitions_of_users(self):
        request = self.factory.get('/api/v1/users/1/exhibitions', **header)

        response = get_exhibitions_of_user(request)
        self.assertEqual(response.status_code, 200)

    def test_get_notifications_of_users(self):
        request = self.factory.get('/api/v1/users/1/notifications', **header)

        response = get_notifications_of_user(request)
        self.assertEqual(response.status_code, 200)



