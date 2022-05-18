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
        print(response)
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
    
    def test_show_universities_POST(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("show_universities")
        response = self.client.post(url, {
            'country_name': 'Turkey'
        })
        print(response)
        self.assertEquals(response.status_code, 200)
    
    def test_university_form_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("university_form")
        response = self.client.get(url, {})
        print(response)
        self.assertEquals(response.status_code, 200)
    
    def test_add_education_form_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("add_education_form")
        response = self.client.get(url, {})
        print(response)
        self.assertEquals(response.status_code, 200)

    def test_add_education_function_POST(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("add_education_function")
        response = self.client.post(url, {
            'username': 'user1',
            'institute_name': 'Bogazici',
            'degree': 'Bachelor',
            'end_year': '2023'
        })
        print(response)
        self.assertEquals(response.status_code, 200)
    
    def test_see_education_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("add_education_form")
        response = self.client.get(url, {})
        print(response)
        self.assertEquals(response.status_code, 200)
