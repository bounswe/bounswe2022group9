from django.test import TestCase, Client
from django.urls import reverse
import json
from ..models.art_item import ArtItem
from faker import Faker
import random


class TestViews(TestCase):

    def setUp(self):
        # Setup run before every test method.
        pass

    def tearDown(self):
        # Clean up run after every test method.
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

    def test_something_that_will_fail(self):
        self.assertTrue(False)
