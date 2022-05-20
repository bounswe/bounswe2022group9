from django.test import TestCase, Client
import json
from summary_api.views import *

# Create your tests here.

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.session = self.client.session

    def test_summary_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = "/summary_api/"
        print(url)
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_summary_POST(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = "/summary_api/"
        response = self.client.post(url, data={"subject": "istanbul"})
        self.assertEquals(response.status_code, 200)
        responsedict = json.loads(response.content)
        self.assertTrue("given subject" in responsedict.keys())
        self.assertTrue("page title" in responsedict.keys())
        self.assertTrue("summary" in responsedict.keys())
        self.assertTrue(len(responsedict["summary"]) > 0)
