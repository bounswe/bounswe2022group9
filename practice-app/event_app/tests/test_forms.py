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

    def test_event_form_valid_data(self):
        form = EventForm(data={
            'event_name' : 'Cinema' ,
            'date' : '23/07/2022' ,
            'city': 'Istanbul',
            'definition' : 'adventure'

        })
        
        self.assertTrue(form.is_valid())

    def test_event_form_no_data(self):
        form = EventForm(data={})
        self.assertFalse(form.is_valid())
        self.assertEquals(len(form.errors), 4)
        
        
