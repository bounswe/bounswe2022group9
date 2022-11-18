from django.db import models
from django.contrib.postgres.fields import ArrayField


class User(models.Model):
    name = models.CharField(max_length=100)
    birthdate = models.DateField()
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=256)
    email = models.EmailField(max_length=200)
    token = models.CharField(max_length=256)
    profile_img_url = models.URLField(default="https://www.linkpicture.com/q/LPic6370e982af0ad569150138.png")
    location = models.CharField(max_length=100, null=True)
    art_items = ArrayField(models.IntegerField(), null=True)
    followers = ArrayField(models.IntegerField(), null=True)
    followings = ArrayField(models.IntegerField(), null=True)
    favourites = ArrayField(models.IntegerField(), null=True)
    comments = ArrayField(models.IntegerField(), null=True)
    exhibitions = ArrayField(models.IntegerField(), null=True)
    notifications = ArrayField(models.IntegerField(), null=True)

    def __str__(self):
        self.email + " " + self.token


class ArtItem(models.Model):
    owner_id = models.IntegerField()
    img_url = models.URLField()
    description = models.CharField(max_length=512)
    date = models.DateField()
    tags = ArrayField(models.CharField(max_length=100), null=True)
    comments = ArrayField(models.IntegerField(), null=True)
    favourites = ArrayField(models.IntegerField(), null=True)


class Comment(models.Model):
    owner_id = models.IntegerField()
    text = models.CharField(max_length=1024)
    date = models.DateField()


class Tag(models.Model):
    text = models.CharField(max_length=100)
