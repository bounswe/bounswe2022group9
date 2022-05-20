from rest_framework import serializers
from .models import PlayerInfo


class PlayerInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PlayerInfo
        fields = '__all__'