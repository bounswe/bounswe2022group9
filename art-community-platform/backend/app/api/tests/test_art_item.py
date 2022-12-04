import hashlib

from django.test import TestCase, Client
from django.test.client import RequestFactory
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random

from ..models.user import User
from ..views.art_item import get_all_art_items, get_art_item_by_id, get_favourites_of_art_item, get_comments_of_art_item
from ..views.comment import comment
from ..views.favourite import favourite

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
        self.art_item = ArtItem.objects.create(owner_id=owner_id, img_url=img_url,
                                               description=description, date=date, tags=tags)

    def test_get_all_art_items(self):
        request = self.factory.get('/api/v1/art-items', **header)

        response = get_all_art_items(request)
        self.assertEqual(response.status_code, 200)

    def test_get_art_item_by_id(self):
        request = self.factory.get('/api/v1/art-items/1', **header)

        response = get_art_item_by_id(request, self.art_item.id)
        res_json = json.loads(response.content)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(res_json['owner_id'], owner_id)
        self.assertEqual(res_json['img_url'], img_url)
        self.assertEqual(res_json['description'], description)
        self.assertEqual(res_json['date'], date)
        self.assertEqual(res_json['tags'], tags)

    def test_get_favourites_of_art_item(self):
        request = self.factory.get('/api/v1/art-items/1/favourites', **header)

        response = get_favourites_of_art_item(request)
        self.assertEqual(response.status_code, 200)

    def test_get_comments_of_art_item(self):
        request = self.factory.get('/api/v1/art-items/1/comments', **header)

        response = get_comments_of_art_item(request)
        self.assertEqual(response.status_code, 200)

    def test_favourite(self):
        data = {"art_item_id": owner_id, "date": date}

        req = self.factory.post('/api/v1/favourite', data=data, content_type="application/json")
        res = favourite(req)

        self.assertEqual(res.status_code, 201)

    def test_comment(self):
        data = {"art_item_id": self.art_item.id, "text": text, "date": date}

        req = self.factory.post('/api/v1/comment', data=data, content_type="application/json")
        res = comment(req)

        self.assertEqual(res.status_code, 201)
