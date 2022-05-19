from rest_framework import serializers
from .models import IpAddresses


class IpAddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = IpAddresses
        fields = '__all__'