from django.db import models

# Create your models here.
class Country(models.Model):
    country_name = models.CharField(max_length=60)
    country_code = models.CharField(max_length=40)

    def __str__(self):
        return self.country_code