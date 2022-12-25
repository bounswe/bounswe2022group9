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

# we will have 3 users
usernames = [fake.username() for i in range(3)]
passwords = [fake.password() for i in range(3)]
emails = [fake.email() for i in range(3)]
names = [fake.name() for i in range(3)]
birthdates = [fake.date() for i in range(3)]
tokens = [hashlib.sha256((usernames[i] + passwords[i] + emails[i]).encode('utf-8')).hexdigest() for i in range(3)]
headers = [{"HTTP_AUTHORIZATION": tokens[i]} for i in range(3)]


class TestProfile(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()

        # we will have 3 users
        self.users = [User.objects.create(
                                        name=names[i], birthdate=birthdates[i], username=usernames[i],
                                        password=passwords[i], email=emails[i], token=tokens[i]
                                        ) for i in range(3)]
        self.arts = []

        # we will have 30 arts,
        # 20 of them will have tag: impressionist
        # 10 of them will have tag: medieval

        # user3 will add first 10 impressionist arts and first 10 medieval arts to her/his likes
        # user2 will add first 5 medieval arts to her/his arts
        for i in range(10):
            self.arts.append(
                ArtItem.objects.create(
                                        tags=["impressionist"],
                                        favourites=[self.users[2].id]
                                      )
                            )
        for i in range(10):
            self.arts.append(
                ArtItem.objects.create(
                                        tags=["impressionist"],
                                      )
                            )
        for i in range(5):
            self.arts.append(
                ArtItem.objects.create(
                                        tags=["medieval"],
                                        favourites=[self.users[1].id, self.users[2].id]
                                      )
                            )
        for i in range(5):
            self.arts.append(
                ArtItem.objects.create(
                                        tags=["medieval"],
                                        favourites=[self.users[2].id]
                                      )
                            )


    def test_users_having_less_than_five_favourites(self):
        req = self.factory.get('/api/v1/recommend/art-items/'+str(self.users[0].id), content_type="application/json")
        res = recommend_art_items(req, self.users[0].id)
        res_json = json.loads(res.content)

        self.assertEqual(res.status_code, 200)

        # check the values
        recommendation_ids = [art['id'] for art in res_json['recommendations']]
        for art in enumerate(self.arts):
            if len(art.favourites) == 0:
                continue
            self.assertTrue(art.id in recommendation_ids, "missing recommendation")

    def test_users_having_gte_five_favourites(self):
        req = self.factory.get('/api/v1/recommend/art-items/'+str(self.users[1].id), content_type="application/json")
        res = recommend_art_items(req, self.users[1].id)
        res_json = json.loads(res.content)

        self.assertEqual(res.status_code, 200)
        # there are 10 art items having mutual tags with user[1]'s favouites
        self.assertEqual(len(res_json['recommendations']), 10)

        # check the values
        recommendation_ids = [art['id'] for art in res_json['recommendations']]
        for art in enumerate(self.arts):
            self.assertTrue("medieval" in art.tags, "recommendation not having mutual tags with user's favourites")


# we will have 10 users for user test
username = [fake.username() for i in range(10)]
password = [fake.password() for i in range(10)]
email = [fake.email() for i in range(10)]
name = [fake.name() for i in range(10)]
birthdate = [fake.date() for i in range(10)]
token = [hashlib.sha256((usernames[i] + passwords[i] + emails[i]).encode('utf-8')).hexdigest() for i in range(10)]
header = [{"HTTP_AUTHORIZATION": tokens[i]} for i in range(10)]

class TestUser(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()

        # we will have 10 users
        self.users = [User.objects.create(
                                        name=names[i], birthdate=birthdates[i], username=usernames[i],
                                        password=passwords[i], email=emails[i], token=tokens[i]
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

