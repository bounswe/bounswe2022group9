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
from ..views.profile import *

fake = Faker()

date = fake.date()

username1 = fake.username()
password1 = fake.password()
email1 = fake.email()
name1 = fake.name()
birthdate1 = fake.date()
token1 = hashlib.sha256((username1 + password1 + email1).encode('utf-8')).hexdigest()
header1 = {"HTTP_AUTHORIZATION": token1}


class TestProfile(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.user = User.objects.create(name=name1, birthdate=birthdate1, username=username1,
                                        password=password1, email=email1, token=token1)
        self.new_profile_image_url = fake.url()
        self.new_birthdate = fake.date()
        self.new_location = 'Ankara'
        self.new_name = fake.name()
        self.new_art_items = [1, 2, 3, 4, 5, 6, 7]
        self.new_comments = [1, 2, 3, 4, 5, 6, 7, 8]

    def test_get_profile_info(self):

        req = self.factory.get('/api/v1/users/'+str(self.user.id)+'/get_profile_info', content_type="application/json")
        res = get_profile_info(req, self.user.id)
        res_json = json.loads(res.content)

        self.assertEqual(res.status_code, 200)

        # check the values
        self.assertEqual(res_json['profile_img_url'], self.user.profile_img_url)
        self.assertEqual(res_json['birthdate'], self.user.birthdate)
        self.assertEqual(res_json['location'], self.user.location)
        self.assertEqual(res_json['user_level'], (len(self.new_art_items) + len(self.new_comments)) / 5)

    def test_update_profile_info(self):

        data = {
            'profile_img_url': self.new_profile_image_url,
            'email': self.user.email,
            'birthdate': self.new_birthdate,
            'location': self.new_location,
            'name': self.new_name
        }

        req = self.factory.post('/api/v1/users/'+str(self.user.id)+'/update_profile_info', data=data, content_type="application/json")
        res = update_profile_info(req, self.user.id)

        self.assertEqual(res.status_code, 200)

        # check whether values are updated or not
        u = User.objects.get(id=self.user.id)
        self.assertEqual(u.profile_img_url, self.new_profile_image_url)
        self.assertEqual(u.birthdate, self.new_birthdate)
        self.assertEqual(u.location, self.new_location)

