from django.test import TestCase, Client
from django.urls import reverse


class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.session = self.client.session

    def test_view_github_info_POST(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("viewGithubInfo")
        response = self.client.post(url, {
            'github_username': 'ozdemirfurkan'
        })
        self.assertEquals(response.status_code, 200)

    def test_sign_in_GET(self):
        url = reverse("sign_in")
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_sign_in_POST(self):
        url = reverse("sign_in")
        response = self.client.post(url)
        self.assertEquals(response.status_code, 200)

    def test_sign_up_GET(self):
        url = reverse("sign_up")
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_sign_up_POST(self):
        url = reverse("sign_up")
        response = self.client.post(url)
        self.assertEquals(response.status_code, 200)

    def test_view_github_info_page_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("viewGithubInfoPage")
        response = self.client.get(url, {'username': 'user1'})
        self.assertEquals(response.status_code, 200)
