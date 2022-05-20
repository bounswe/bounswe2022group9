from dataclasses import fields
from rest_framework import serializers
from .models import RaceStanding


class RaceStandingSerializer(serializers.ModelSerializer):
    class Meta:
        model = RaceStanding
        fields = '__all__'