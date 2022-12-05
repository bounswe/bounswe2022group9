from django.test import TestCase, Client
from django.test.client import RequestFactory
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random

from ..views.auth import signup, login
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


class TestAuth(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.user = User.objects.create(name=name, birthdate=birthdate, username=username,
                                        password=password, email=email, token=token)

    def test_signup(self):
        name1 = fake.name()
        birthdate1 = fake.date()
        username1 = fake.username()
        password1 = fake.password()
        email1 = fake.email()

        data = {
            'name': name1,
            'birthdate': birthdate1,
            'username': username1,
            'password': password1,
            'email': email1
        }

        req = self.factory.post('/api/v1/signup', data=data,
                                content_type="application/json")
        res = signup(req)

        # look at the status code
        self.assertEqual(res.status_code, 201)

        # check the values
        u = None
        try:
            u = User.objects.get(email = email1)
        except:
            self.assertFalse(True)

        self.assertEqual(u.name,name1)
        self.assertEqual(u.username, username1)
        self.assertEqual(u.email, email1)
        self.assertEqual(u.birthdate, birthdate1)

    def test_signup_when_user_already_exists(self):
        # these are information of the user created in setUp
        # it shouldn't be able to sign up again
        data = {
            'name': name,
            'birthdate': birthdate,
            'username': username,
            'password': password,
            'email': email
        }

        req = self.factory.post('/api/v1/signup', data=data,
                                content_type="application/json")
        res = signup(req)

        # look at the status code
        self.assertEqual(res.status_code, 400)



    def test_login(self):
        req = self.factory.post('/api/v1/login', data=json.dumps({'username': username, 'password': password}),
                                content_type="application/json")

        res = login(req)
        res_json = json.loads(res.content)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(res_json['user_id'], 'ahmet')
        self.assertEqual(res_json['token'], token)
