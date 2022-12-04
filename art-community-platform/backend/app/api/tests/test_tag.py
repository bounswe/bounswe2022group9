import hashlib

from django.test import TestCase, Client
from django.test.client import RequestFactory
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random

from ..models.tag import Tag
from ..models.user import User
from ..views.art_item import get_all_art_items, get_art_item_by_id
from ..views.tag import get_tag_by_id

fake = Faker()

text = fake.text()


class TestTag(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.tag = Tag.objects.create(text=text)

    def test_get_art_item_by_id(self):
        request = self.factory.get('/api/v1/tags/1')

        response = get_tag_by_id(request, self.tag.id)
        res_json = json.loads(response.content)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(res_json['text'], text)

