from django.test import TestCase, Client
from django.urls import reverse
import json
from .. import models
from faker import Faker
import random

class TestViews(TestCase):
    def setUp(self):
        self.client = Client()
        self.session = self.client.session
        fake = Faker()

    def test_signup_POST_returns_400_when_fields_are_missing(self):
        signup_url = reverse('signup')
        response = self.client.post(signup_url, {})
        self.AssertEquals(response.status_code == 400)

    def test_signup_POST_returns_400_when_password_is_short(self):
        signup_url = reverse('signup')
        username = ''.join(fake.name().split())
        email = fake.email()
        response = self.client.post(signup_url, {
            'username' : username,
            'email' : email,
            'password' : "",
        })
        self.AssertEquals(response.status_code == 400)

    def test_signup_POST_returns_400_when_password_contains_only_numbers(self):
        signup_url = reverse('signup')
        username = ''.join((fake.name() + fake.name()).split())
        email = fake.email()
        number_list = [str(random.randint(0,9)) for i in range(10)]
        password = ''.join(number_list)
        response = self.client.post(signup_url, {
            'username' : username,
            'email' : email
            'password' : password,
        })
        self.AssertEquals(response.status_code == 400)

    def test_signup_POST_returns_201_when_request_is_valid(self):
        signup_url = reverse('signup')
        username = ''.join((fake.name() + fake.name()).split())
        email = fake.email()
        response = self.client.post(signup_url, {
            'username' : username,
            'email' : email,
            'password' : "12345678Aa",
        })
        self.AssertEquals(response.status_code == 201)