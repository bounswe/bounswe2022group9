from rest_framework import serializers
from dataclasses import fields
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'