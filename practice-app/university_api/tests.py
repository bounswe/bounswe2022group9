from django.test import TestCase, Client
from django.urls import reverse

# Create your tests here.

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.session = self.client.session

    def test_university_list_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("list")
        response = self.client.get(url,data={"country_name":"Turkey"})
        self.assertEquals(response.status_code, 200)