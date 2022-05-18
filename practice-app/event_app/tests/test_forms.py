from django.test import SimpleTestCase
from event_app.forms import *


class TestForms(SimpleTestCase):

    def test_user_form_valid_data(self):
        form = UserLoginForm(data={
            'username': 'user1',
            'password': '123456'
        })

        self.assertTrue(form.is_valid())

    def test_user_form_no_data(self):
        form = UserLoginForm(data={})
        self.assertFalse(form.is_valid())
        self.assertEquals(len(form.errors), 2)
