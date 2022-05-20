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

    def test_add_event(self):
        url=reverse("add_event")
        self.assertEqual(resolve(url).func,add_event)
    
    def test_add_event_page(self):
        url=reverse("addEventPage")
        self.assertEqual(resolve(url).func,addEventPage)

    def test_view_random_useless_fact(self):
        url=reverse("viewRandomUselessFact")
        self.assertEqual(resolve(url).func,viewRandomUselessFact)
    
    def test_university_form(self):
        url = reverse("university_form")
        self.assertEqual(resolve(url).func, university_form)
    
    def test_show_universities(self):
        url = reverse("show_universities")
        self.assertEqual(resolve(url).func, show_universities)
    
    def test_add_education_form(self):
        url = reverse("add_education_form")
        self.assertEqual(resolve(url).func, add_education_form)
    
    def test_add_education_function(self):
        url = reverse("add_education_function")
        self.assertEqual(resolve(url).func, add_education_function)
    
    def test_see_education(self):
        url = reverse("see_education")
        self.assertEqual(resolve(url).func, see_education)

    def test_findCurrency_page(self):
        url = reverse("findCurrency_page")
        self.assertEqual(resolve(url).func, findCurrency_page)
        
    def test_findCurrency(self):
        url = reverse("findCurrency")
        self.assertEqual(resolve(url).func, findCurrency)


