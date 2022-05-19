from django.db import models


class Education(models.Model):
    username = models.CharField(max_length=40)
    institute_name = models.CharField(max_length=40)
    degree = models.CharField(max_length=80)
    end_year = models.CharField(max_length=5)

    def __str__(self):
        return self.institute_name


