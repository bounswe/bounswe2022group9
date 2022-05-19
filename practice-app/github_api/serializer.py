from rest_framework import serializers
from .models import GithubUsers


class GithubUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = GithubUsers
        fields = '__all__'
