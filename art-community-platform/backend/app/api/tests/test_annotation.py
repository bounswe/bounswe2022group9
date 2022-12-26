import hashlib

from django.test import TestCase, Client
from django.test.client import RequestFactory
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random

from ..models.user import User
from ..views.annotation import *
from ..views.art_item import get_all_art_items, get_art_item_by_id, get_favourites_of_art_item, get_comments_of_art_item
from ..views.comment import comment
from ..views.favourite import favourite

fake = Faker()

owner_id = fake.id()
art_item_id = fake.id()
img_url = fake.url()
img_base64 = "data:image/png;base64,"
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
        self.art_item = ArtItem.objects.create(owner_id=owner_id, img_base64=img_base64,
                                               description=description, date=date, tags=tags)

    def test_create_annotation(self):
        data = {
            "owner_id": 1,
            "art_item_id": 1,
            "annotation_comment": "user-comment-here",
            "annotation_type": "image-or-text-here",
            "annotation_format": "image/png-or-text-here",
            "annotation_source": "image-link-or-text-here-with-coordinates"
        }

        req = self.factory.post('/api/v1/annotation', data=data, content_type="application/json")
        res = create_annotation(req)

        self.assertEqual(res.status_code, 201)

    def test_update_annotation(self):
        data = {
            "owner_id": 1,
            "art_item_id": 1,
            "annotation_comment": "updated-user-comment-here",
            "annotation_type": "updated-image-or-text-here",
            "annotation_format": "updated-image/png-or-text-here",
            "annotation_source": "updated-image-link-or-text-here-with-coordinates"
        }

        req = self.factory.post('/api/v1/annotation/' + art_item_id, data=data, content_type="application/json")
        res = update_annotation(req, art_item_id)

        self.assertEqual(res.status_code, 201)

