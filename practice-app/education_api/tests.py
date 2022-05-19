from django.test import TestCase, Client
from django.urls import reverse, resolve
from education_api.views import *

# Create your tests here.

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.session = self.client.session
    
    def test_add_education_url(self):
        url = reverse("add")
        self.assertEqual(resolve(url).func, add_education)

    def test_list_education_url(self):
        url = reverse("list")
        self.assertEqual(resolve(url).func, list_education)

    def test_add_education_POST(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("add")
        response = self.client.post(url, data = {
            'institute_name': 'bogazici',
            'degree': 'bachelor',
            'end_year': '2022',
        },Follow=True)
        self.assertEquals(response.status_code, 200)

    def test_list_education_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("list")
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)