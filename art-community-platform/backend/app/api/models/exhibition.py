from django.db import models
from django.contrib.postgres.fields import ArrayField


class Exhibition(models.Model):
    owner_id = models.IntegerField(default=1)
    name = models.CharField(max_length=100, default='exhibition name')
    description = models.CharField(max_length=500, default='exhibition description')
    type = models.CharField(max_length=100, default='physical')
    location = models.CharField(max_length=100, default='Istanbul')
    open_address = models.CharField(max_length=500, default='Picasso Caddesi No:26/7 Beylikduzu/Istanbul')
    start_time = models.TimeField(default='10:30')
    end_time = models.TimeField(default='13:00')
    date = models.DateField(default='2022-01-01')
    art_items = ArrayField(models.IntegerField(), default=[])
