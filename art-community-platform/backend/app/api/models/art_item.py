from django.db import models
from django.contrib.postgres.fields import ArrayField


class ArtItem(models.Model):
    owner_id = models.IntegerField()
    image = models.TextField(null=True)
    img_url = models.URLField(default='https://www.linkpicture.com/q/LPic6370e982af0ad569150138.png')
    description = models.CharField(max_length=512)
    date = models.DateField()
    tags = ArrayField(models.CharField(max_length=100), null=True)
    comments = ArrayField(models.IntegerField(), null=True)
    favourites = ArrayField(models.IntegerField(), null=True)
