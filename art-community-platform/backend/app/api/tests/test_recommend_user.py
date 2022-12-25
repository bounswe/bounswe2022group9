from django.test import TestCase, Client
from django.test.client import RequestFactory
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random
import unittest

from ..views.auth import signup
from ..views.user import *
from ..views.follow import *
from ..views.profile import *
from ..views.art_item import *
from ..views.recommend import *

fake = Faker()

date = fake.date()

# we will have 10 users for user test
username = [fake.username() for i in range(10)]
password = [fake.password() for i in range(10)]
email = [fake.email() for i in range(10)]
name = [fake.name() for i in range(10)]
birthdate = [fake.date() for i in range(10)]
token = [hashlib.sha256((username[i] + password[i] + email[i]).encode('utf-8')).hexdigest() for i in range(10)]
header = [{"HTTP_AUTHORIZATION": token[i]} for i in range(10)]

class TestUser(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()

        # we will have 10 users
        self.users = [User.objects.create(
                                        name=name[i], birthdate=birthdate[i], username=username[i],
                                        password=password[i], email=email[i], token=token[i]
                                        ) for i in range(10)]

        # Following network: users[x] follows users[y] such that y > x

        for i in range(10):
            for j in range(i+1,10):
                self.users[i].followings.append(j)
                self.users[j].followers.append(i)



    def test_users_having_less_than_three_followings(self):
        req = self.factory.get('/api/v1/recommend/user/'+str(self.users[8].id), content_type="application/json")
        res = recommend_users_to_follow(req, self.users[8].id)
        res_json = json.loads(res.content)

        self.assertEqual(res.status_code, 200)

        # check the values
        recommendation_ids = res_json['recommendations']
        must_be = [0,1,2,3,4,5,6,7]
        sorted(recommendation_ids)
        sorted(must_be)
        self.assertTrue(recommendation_ids == must_be)

    def test_users_having_not_less_than_three_followings(self):
        req = self.factory.get('/api/v1/recommend/user/'+str(self.users[4].id), content_type="application/json")
        res = recommend_users_to_follow(req, self.users[4].id)
        res_json = json.loads(res.content)

        self.assertEqual(res.status_code, 200)
        # check the values
        recommendation_ids = res_json['recommendations']
        must_be = [5,6,7,8,9]
        sorted(recommendation_ids)
        sorted(must_be)
        self.assertTrue(recommendation_ids == must_be)