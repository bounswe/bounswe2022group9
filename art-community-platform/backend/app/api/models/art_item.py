from django.db import models
from django.contrib.postgres.fields import ArrayField


class ArtItem(models.Model):
    owner_id = models.IntegerField()
    img_url = models.URLField()
    description = models.CharField(max_length=512)
    date = models.DateField()
    tags = ArrayField(models.CharField(max_length=100), null=True)
    comments = ArrayField(models.IntegerField(), null=True)
    favourites = ArrayField(models.IntegerField(), null=True)

