from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from player_info_api.models import PlayerInfo
from player_info_api.serializer import PlayerInfoSerializer

@api_view(['GET'])
def show_player_list(request):
    name = PlayerInfo.objects.all()
    serializer = PlayerInfoSerializer(name, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def create_player(request):
    if request.method == 'GET':
        name = PlayerInfo.objects.all()
        serializer = PlayerInfoSerializer(name, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PlayerInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



