"""
Created on MAY 19, 2022
This script controls the formula 1 api of our practice app using django&mysql backend.
Endpoint description:
    http://localhost:8000/formula1_api/
    'GET':
        In the frontend, we enter race year and race round and it gives us standing of the particular race
            Rank
            Driver Name
            Driver Surname
            Driver Nationality

        At each query, outputs are stored in database. 
        In this 'GET' response, all tha data stored in database are returned in JSON format.
        i.e.
        {
            {
                    "id": 1,
                    "race_year": "2019",
                    "race_round": "3",
                    "race_standing": "[[1, 'Valtteri', 'Bottas', 'Finnish'], [2, 'Sebastian', 'Vettel', 'German']] ..."
            }

            {
                    "id": 2,
                    "race_year": "2017",
                    "race_round": "12",
                    "race_standing": "..."

            }
            .
            .
            .
        } 

    'POST':
        We enter race_year, race_round, and race_standing in json format and it returns what we enter in JSON format.   

@author: Berkkant Koç
@company: Group9
"""

import imp
import json
from urllib import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from event_app.models import RaceStanding
from event_app.serializer import RaceStandingSerializer

@api_view(['GET', 'POST'])
def formula1_race_standing(request):
    if request.method == 'GET': #if get request sent
        all_standings = RaceStanding.objects.all() #fetch data from db
        serializer = RaceStandingSerializer(all_standings,many = True) #convert to JSON format
        return Response(serializer.data )

        
    elif request.method == 'POST':
        serializer = RaceStandingSerializer(data=request.data) #if post request sent
        if serializer.is_valid(): #check the data sent is in valid form i.e. correct json format
            serializer.save() #save it to the db
            return Response(serializer.data)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    #if data is not in correct form return 404 error 
        



