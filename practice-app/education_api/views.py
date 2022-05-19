from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from education_api.models import Education
from education_api.serializer import EducationSerializer
from .db_utils import run_statement
import json

# Create your views here.

"""
There are two end points in this file.
To use them you should be logged in to the system.

....../education_api/list --> lists education history of logged in user (GET method)
....../education_api/add --> adds new education records to the education history of logged in user (POST method)
To add, request body of the POST request should be in json format and should have "institute_name", "degree", "end_year" fields


"""

@api_view(['GET'])
def list_education(req):
    if not req.session.get("username"):
        return HttpResponse('Unauthorized', status=401)
    username = req.session.get("username")
    try:
        # Run the query in DB
        result = run_statement(f"SELECT * FROM Education WHERE username='{username}' ORDER BY end_year DESC;")
        jl = []
        for r in result:
            jl.append({"username":r[0],"institute_name":r[1],"degree":r[2],"end_year":r[3]})
        return JsonResponse({
            "results" : jl
        })
    except Exception as e:
        return HttpResponse('Internal Server Error', status=500)

@api_view(['POST'])
def add_education(req):
    if not req.session.get("username"):
        return HttpResponse('Unauthorized', status=401)
    username = req.session.get("username")
    body_unicode = req.body.decode('utf-8')
    body = json.loads(body_unicode)
    institute_name = body["institute_name"]
    degree = body["degree"]
    end_year = body["end_year"]
    try:
        print("end year is: ", end_year)
        print(f"CALL AddEducation('{username}','{institute_name}','{degree}',{end_year})")
        run_statement(f"CALL AddEducation('{username}','{institute_name}','{degree}',{end_year})")
        return JsonResponse({
            "success" : "success"
        })
    except Exception as e:
        return HttpResponse('Internal Server Error', status=500)
