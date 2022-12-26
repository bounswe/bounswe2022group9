import hashlib

from django.test import TestCase, Client
from django.test.client import RequestFactory
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random

from ..models.comment import Comment
from ..models.notification import Notification
from ..models.tag import Tag
from ..models.user import User
from ..views.art_item import get_all_art_items, get_art_item_by_id
from ..views.comment import get_comment_by_id
from ..views.notification import get_notification_by_id, get_notification_by_receiver_id

fake = Faker()

receiver_id = fake.id()
text = fake.text()
date = fake.date()


class TestNotification(TestCase):

    def setUp(self):
        # Setup run before every test method.
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.notification = Notification.objects.create(receiver_id=receiver_id, text=text, date=date)

    def test_get_notification_by_id(self):
        request = self.factory.get('/api/v1/notifications/1')

        response = get_notification_by_id(request, self.notification.id)
        res_json = json.loads(response.content)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(res_json['receiver_id'], receiver_id)
        self.assertEqual(res_json['text'], text)
        self.assertEqual(res_json['date'], date)

    def test_get_notification_by_receiver_id(self):
        request = self.factory.get('/api/v1/notification/' + str(receiver_id))

        response = get_notification_by_receiver_id(request, self.notification.id)
        res_json = json.loads(response.content)

        self.assertEqual(response.status_code, 200)

        self.assertEqual(res_json['notifications'][0]['receiver_id'], receiver_id)
        self.assertEqual(res_json['notifications'][0]['text'], text)
        self.assertEqual(res_json['notifications'][0]['data'], date)
        self.assertEqual(res_json['notifications'][0]['id'], str(self.notification.id))

