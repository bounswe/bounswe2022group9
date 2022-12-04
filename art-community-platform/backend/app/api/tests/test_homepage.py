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
from ..views.homepage import get_homepage

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


class TestHomepage(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.user = User.objects.create(name=name, birthdate=birthdate, username=username,
                                        password=password, email=email, token=token)
        self.art_item = ArtItem.objects.create(owner_id=owner_id, img_url=img_url,
                                               description=description, date=date, tags=tags)

    def test_get_homepage(self):
        request = self.factory.get('/api/v1/homepage', **header)

        response = get_homepage(request)
        self.assertEqual(response.status_code, 200)
