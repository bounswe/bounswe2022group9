from django.db import models
from django.contrib.postgres.fields import ArrayField


class User(models.Model):
    name = models.CharField(max_length=100, default='name')
    birthdate = models.DateField(default='2000-01-01')
    username = models.CharField(max_length=100, default='username')
    password = models.CharField(max_length=256, default='Password123!')
    email = models.EmailField(max_length=200, default='email@email.com')
    token = models.CharField(max_length=256, default='token')
    profile_img_url = models.URLField(default="https://www.linkpicture.com/q/LPic6370e982af0ad569150138.png")
    location = models.CharField(max_length=100, default='Istanbul')
    art_items = ArrayField(models.IntegerField(), default=[])
    followers = ArrayField(models.IntegerField(), default=[])
    followings = ArrayField(models.IntegerField(), default=[])
    favourites = ArrayField(models.IntegerField(), default=[])
    comments = ArrayField(models.IntegerField(), default=[])
    exhibitions = ArrayField(models.IntegerField(), default=[])
    notifications = ArrayField(models.IntegerField(), default=[])
