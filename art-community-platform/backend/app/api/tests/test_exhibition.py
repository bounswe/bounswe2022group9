import hashlib

from django.test import TestCase, Client
from django.test.client import RequestFactory
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random

from ..models.comment import Comment
from ..models.exhibition import Exhibition
from ..models.tag import Tag
from ..models.user import User
from ..views.art_item import get_all_art_items, get_art_item_by_id
from ..views.comment import get_comment_by_id
from ..views.exhibition import get_exhibition_by_id, create_exhibition

fake = Faker()

owner_id = fake.id()
img_url = fake.url()
description = fake.description()
date = fake.date()
tags = ['a', 'b', 'c']

location = fake.location()
open_address = fake.address()
start_time = fake.time()
end_time = fake.time()
ex_type = fake.type()
art_item_ids = []

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
        self.exhibition = Exhibition.objects.create(owner_id=owner_id, name=name, description=description, type=ex_type,
                                                    location=location, open_address=open_address, start_time=start_time,
                                                    end_time=end_time, date=date, art_items=art_item_ids)

    def test_get_exhibition_by_id(self):
        request = self.factory.get('/api/v1/exhibitions/1')

        response = get_exhibition_by_id(request, self.exhibition.id)
        res_json = json.loads(response.content)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(res_json['owner_id'], owner_id)
        self.assertEqual(res_json['name'], name)
        self.assertEqual(res_json['description'], description)
        self.assertEqual(res_json['type'], ex_type)
        self.assertEqual(res_json['location'], location)
        self.assertEqual(res_json['open_address'], open_address)
        self.assertEqual(res_json['start_time'], start_time)
        self.assertEqual(res_json['end_time'], end_time)
        self.assertEqual(res_json['date'], date)
        self.assertEqual(res_json['art_items'], art_item_ids)

    def test_create_exhibition(self):
        data = {"owner_id": owner_id, "name": name, "description": description, "type": ex_type,
                "location": location, "open_address": open_address, "start_time": start_time,
                "end_time": end_time, "date": date, "art_items": art_item_ids}

        req = self.factory.post('/api/v1/exhibition', data=data, content_type="application/json")
        res = create_exhibition(req)

        self.assertEqual(res.status_code, 201)


