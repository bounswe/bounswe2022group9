from django.test import SimpleTestCase
from django.urls import resolve, reverse
from .. import views


class TestUrls(SimpleTestCase):
    def test_health_check_url_is_resolved(self):
        url = reverse('health_check')
        self.assertEqual(resolve(url).func, views.health_check)

    def test_signup_url_is_resolved(self):
        url = reverse('signup')
        self.assertEqual(resolve(url).func, views.signup)
