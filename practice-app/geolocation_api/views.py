from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from geolocation_api.models import IpAddresses
from geolocation_api.serializer import IpAddressSerializer

@api_view(['GET'])
def ip_addr_list(request):
    ip_addrs = IpAddresses.objects.all()
    serializer = IpAddressSerializer(ip_addrs, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def ip_addr_create(request):
    if request.method == 'GET':
        ip_addrs = IpAddresses.objects.all()
        serializer = IpAddressSerializer(ip_addrs, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = IpAddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


