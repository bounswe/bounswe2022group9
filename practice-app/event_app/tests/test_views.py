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

    def test_view_ip_info_POST(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("viewIpInfo")
        response = self.client.post(url, {
            'ip_addr': '176.89.104.137'
        })
        self.assertEquals(response.status_code, 200)

    def test_view_ip_info_page_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("viewIpInfoPage")
        response = self.client.get(url, {'username': 'user1'})
        self.assertEquals(response.status_code, 200)

    def test_view_activity_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("viewActivity")
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
        
    def test_findCurrency_page(self):
        url=reverse("findCurrency_page")
        response = self.client.post(url)
        self.assertEquals(response.status_code, 200)
        
    def test_findCurrency(self):
        url=reverse("findCurrency")
        response = self.client.post(url)
        self.assertEquals(response.status_code, 200)
        
    def test_add_event_page_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("addEventPage")
        
    def test_add_event_page_POST(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("add_event")
        response = self.client.post(url, {
            'event_name' : 'Cinema' ,
            'date' : '23/07/2022' ,
            'city': 'Istanbul',
            'definition' : 'adventure'
        })
        print(response)
        self.assertEquals(response.status_code, 200)

    def test_view_random_useless_fact_GET(self):
        session = self.client.session
        session['username'] = 'user1'
        session.save()
        url = reverse("viewRandomUselessFact")
        response = self.client.get(url, {'username': 'user1'})

