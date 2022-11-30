from django.db import models
from django.contrib.postgres.fields import ArrayField


class ArtItem(models.Model):
    owner_id = models.IntegerField(default=1)
    image = models.TextField(default='base64-encoded')
    img_url = models.URLField(default='https://www.linkpicture.com/q/LPic6370e982af0ad569150138.png')
    description = models.CharField(max_length=512, default='description')
    date = models.DateField(default='2022-01-01')
    tags = ArrayField(models.CharField(max_length=100), default=[])
    comments = ArrayField(models.IntegerField(), default=[])
    favourites = ArrayField(models.IntegerField(), default=[])
