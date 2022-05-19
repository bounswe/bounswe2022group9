from django.test import SimpleTestCase
from django.urls import reverse, resolve
from event_app.views import *


class TestUrls(SimpleTestCase):
    def test_view_github_info_page(self):
        url = reverse("viewGithubInfoPage")
        self.assertEqual(resolve(url).func, viewGithubInfoPage)

    def test_view_github_info(self):
        url = reverse("viewGithubInfo")
        self.assertEqual(resolve(url).func, viewGithubInfo)

    def test_sign_in(self):
        url = reverse("sign_in")
        self.assertEqual(resolve(url).func, sign_in)

    def test_sign_up(self):
        url = reverse("sign_up")
        self.assertEqual(resolve(url).func, sign_up)

    def test_add_user(self):
        url = reverse("addUser")
        self.assertEqual(resolve(url).func, addUser)

    def test_user_login(self):
        url = reverse("user_login")
        self.assertEqual(resolve(url).func, user_login)

    def test_view_activity(self):
        url = reverse("viewActivity")
        self.assertEqual(resolve(url).func, viewActivity)

    def test_view_ip_info_page(self):
        url = reverse("viewIpInfoPage")
        self.assertEqual(resolve(url).func, viewIpInfoPage)

    def test_view_ip_info(self):
        url = reverse("viewIpInfo")
        self.assertEqual(resolve(url).func, viewIpInfo)