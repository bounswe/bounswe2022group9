from django.test import TestCase, Client
from django.urls import reverse
import json
from .. import models
from faker import Faker
import random

fake = Faker()
signup_url = reverse('signup')
login_url = reverse('login')


class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.session = self.client.session

    def test_signup_POST_returns_400_when_fields_are_missing(self):
        response = self.client.post(signup_url, {})
        self.AssertEquals(response.status_code == 400)

    def test_signup_POST_returns_400_when_password_is_short(self):
        username = ''.join(fake.name().split())
        email = fake.email()
        response = self.client.post(signup_url, {
            'username': username,
            'email': email,
            'password': "",
        })
        self.AssertEquals(response.status_code == 400)

    def test_signup_POST_returns_400_when_password_contains_only_numbers(self):
        username = ''.join((fake.name() + fake.name()).split())
        email = fake.email()
        number_list = [str(random.randint(0, 9)) for i in range(10)]
        password = ''.join(number_list)
        response = self.client.post(signup_url, {
            'username': username,
            'email': email,
            'password': password,
        })
        self.AssertEquals(response.status_code == 400)

    def test_signup_POST_returns_201_when_request_is_valid(self):
        username = ''.join((fake.name() + fake.name()).split())
        email = fake.email()
        response = self.client.post(signup_url, {
            'username': username,
            'email': email,
            'password': "12345678Aa",
        })
        self.AssertEquals(response.status_code == 201)

    def test_login_POST_returns_400_when_fields_are_missing(self):
        response = self.client.post(login_url, {})
        self.AssertEquals(response.status_code == 400)

    def test_login_POST_returns_400_when_username_not_found(self):
        username = "not found"
        password = fake.password()
        response = self.client.post(login_url, {
            'username': username,
            'password': password,
        })
        self.AssertEquals(response.status_code == 400)

    def test_login_POST_returns_400_when_password_is_wrong(self):
        username = ''.join((fake.name() + fake.name()).split())
        password = "wrong password"
        response = self.client.post(login_url, {
            'username': username,
            'password': password,
        })
        self.AssertEquals(response.status_code == 400)

    def test_signup_POST_returns_201_when_request_is_valid(self):
        username = ''.join((fake.name() + fake.name()).split())
        email = fake.email()
        signup_resp = self.client.post(signup_url, {
            'username': username,
            'email': email,
            'password': "12345678Aa",
        })

        login_resp = self.client.post(login_url, {
            'username': username,
            'password': "12345678Aa",
        })

        self.AssertEquals(signup_resp.status_code == 201)
        self.AssertEquals(login_resp.status_code == 200)
