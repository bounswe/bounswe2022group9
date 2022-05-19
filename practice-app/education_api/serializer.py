from rest_framework import serializers
from education_api.models import Education

class EducationSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField()
    institute_name = serializers.CharField()
    degree = serializers.CharField()
    end_year = serializers.CharField()

    def create(self,data):
        return Education.objects.create(**data)