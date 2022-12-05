from django.test import TestCase, Client
from django.test.client import RequestFactory
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random

from ..views.auth import signup
from ..views.user import *
from ..views.follow import *

fake = Faker()

date = fake.date()

username1 = fake.username()
password1 = fake.password()
email1 = fake.email()
name1 = fake.name()
birthdate1 = fake.date()
token1 = hashlib.sha256((username1 + password1 + email1).encode('utf-8')).hexdigest()
header1 = {"HTTP_AUTHORIZATION": token1}

username2 = fake.username()
password2 = fake.password()
email2 = fake.email()
name2 = fake.name()
birthdate2 = fake.date()
token2 = hashlib.sha256((username2 + password2 + email2).encode('utf-8')).hexdigest()
header2 = {"HTTP_AUTHORIZATION": token2}


class TestUnfollow(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.follower = User.objects.create(name=name1, birthdate=birthdate1, username=username1,
                                        password=password1, email=email1, token=token1)
        self.followed = User.objects.create(name=name2, birthdate=birthdate2, username=username2,
                                            password=password2, email=email2, token=token2)

    def test_unfollow_valid_request(self):
        # make a following relationship between users to create a valid request
        self.followed.followers = [self.follower.id]
        self.followed.save()

        self.follower.followings = [self.followed.id]
        self.follower.save()

        data = {"token": self.token1, "followed_id": self.followed.id}

        req = self.factory.post('/api/v1/unfollow', data=data, content_type="application/json")
        res = unfollow(req)

        self.assertEqual(res.status_code, 200)

        # their follower/followings lists should be empty now
        self.assertListEqual(self.follower.followings, [])
        self.assertListEqual(self.followed.followers, [])

    def test_unfollow_invalid_request(self):
        data = {"token": self.token1, "followed_id": self.followed.id}

        req = self.factory.post('/api/v1/unfollow', data=data, content_type="application/json")
        res = unfollow(req)

        # response should be a 400 bad request since in this test case, there is no following relationship between users
        self.assertEqual(res.status_code, 400)



