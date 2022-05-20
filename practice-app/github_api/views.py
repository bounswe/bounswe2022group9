from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from github_api.models import GithubUsers
from github_api.serializer import GithubUserSerializer
# Create your views here.


@api_view(['GET'])
def github_user_list(request):
    github_users = GithubUsers.objects.all()
    serializer = GithubUserSerializer(github_users, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def github_user_create(request):
    if request.method == 'GET':
        github_users = GithubUsers.objects.all()
        serializer = GithubUserSerializer(github_users, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = GithubUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
