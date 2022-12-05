import hashlib

from django.test import TestCase, Client
from django.test.client import RequestFactory
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random

from ..models.comment import Comment
from ..models.tag import Tag
from ..models.user import User
from ..views.art_item import get_all_art_items, get_art_item_by_id
from ..views.comment import get_comment_by_id

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


class TestComment(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.comment = Comment.objects.create(owner_id=owner_id, text=text, date=date)

    def test_get_comment_by_id(self):
        request = self.factory.get('/api/v1/comments/1')

        response = get_comment_by_id(request, self.comment.id)
        res_json = json.loads(response.content)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(res_json['owner_id'], owner_id)
        self.assertEqual(res_json['text'], text)
        self.assertEqual(res_json['date'], date)

