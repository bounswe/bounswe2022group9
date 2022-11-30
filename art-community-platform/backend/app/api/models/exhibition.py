from django.db import models
from django.contrib.postgres.fields import ArrayField


class Exhibition(models.Model):
    owner_id = models.IntegerField(default=1)
    type = models.CharField(max_length=100, default='physical')
    location = models.CharField(max_length=100, default='Istanbul')
    date = models.DateField(default='2022-01-01')
    art_items = ArrayField(models.IntegerField(), default=[])
