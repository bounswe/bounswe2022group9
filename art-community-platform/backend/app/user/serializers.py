from rest_framework import serializers
from .models import User, ArtItem, Comment, Tag


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class ArtItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtItem
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
