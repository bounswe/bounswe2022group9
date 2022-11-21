from django.db import models
from django.contrib.postgres.fields import ArrayField


class Exhibition(models.Model):
    owner_id = models.IntegerField()
    type = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    date = models.DateField()
    art_items = ArrayField(models.IntegerField())
