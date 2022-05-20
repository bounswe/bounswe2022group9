from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse
import requests

# Create your views here.

"""
The GET method returns a summary for Istanbul.
The POST method takes a parameter of the form {"subject": subject-name} and returns a summary for that.
"""
@api_view(['GET', 'POST'])
def get_summary(request):
    if request.method == "GET":
        given_name = request.GET.get("search", "Istanbul")
    elif request.method == "POST":
        given_name = request.data["subject"]  # The name should be given as a string

    if len(given_name) > 100:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    # Search for the given keyword on wikipedia
    search_url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={given_name}&srlimit=1&format=json"
    search_response = requests.get(search_url)
    if search_response.status_code != 200:  # Wikipedia returned a non-200 status code. Fail
        return Response(status=search_response.status_code)
    search_json = search_response.json()
    search_results = search_json["query"]["search"]
    if len(search_results) == 0:  # Successfully searched but found no results
        return Response(status=status.HTTP_404_NOT_FOUND)
    page_title = search_results[0]["title"]  # Title of first search result

    # Get a summary of the page
    summary_url = f"https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=1&exintro=1&titles={page_title}&explaintext=1&formatversion=2&format=json"
    summary_response = requests.get(summary_url)
    if summary_response.status_code != 200:  # Wikipedia returned a non-200 status code. Fail
        return Response(status=summary_response.status_code)
    summary_json = summary_response.json()
    summary_text = summary_json["query"]["pages"][0]["extract"]
    return JsonResponse({"given subject": given_name,
                         "page title": page_title,
                         "summary": summary_text})
