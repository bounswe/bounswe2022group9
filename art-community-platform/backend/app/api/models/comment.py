from django.db import models
from django.contrib.postgres.fields import ArrayField


class Comment(models.Model):
    owner_id = models.IntegerField()
    text = models.CharField(max_length=1024)
    date = models.DateField()

