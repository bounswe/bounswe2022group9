from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests

# Create your views here.

@api_view(['GET'])
def university_list(req):
    country_name = req.GET["country_name"]
    resp = requests.get("http://universities.hipolabs.com/search?country=" + country_name)
    unv_info = resp.json()
    for i in range(len(unv_info)):
        name = unv_info[i]["name"]
        web_page = ""
        if unv_info[i]["domains"]:
            web_page = unv_info[i]["domains"][0]
        unv_info[i] = {"number":i+1,"name":name,"web_page":web_page}
    result = {"university_list": unv_info}
    return JsonResponse(result)