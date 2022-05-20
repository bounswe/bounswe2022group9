import json
from urllib import response
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.urls import reverse
import json
from rest_framework.test import APIRequestFactory
from rest_framework.test import RequestsClient

class Formula1Tests(APITestCase):
    def test_get_race_information_page(self):
        """
        Tests whether we can reach the page where we enter the race infos.
        """
        
        client = APIClient()
        response = client.get('/event_app/race_standing')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
  

    def test_post_race_information_page(self):
        """
        Tests whether we can post information to the web page

        """ 
        data = {'year':'2021','round':'3'}
        client = APIClient()
        response = client.post('/event_app/race_standing',data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invalid_input_year(self):
        """
        Tests whether we can not post invalid year to the web page
        
        """ 
        data = {'year':'2027','round':'3'}
        client = APIClient()
        response = client.post('/event_app/race_standing',data)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_invalid_input_round(self):
        """
        Tests whether we can not post invalid round to the web page
        
        """ 
        data = {'year':'2021','round':'374'}
        client = APIClient()
        response = client.post('/event_app/race_standing',data)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)






    



