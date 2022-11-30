from django.db import models
from django.contrib.postgres.fields import ArrayField


class Comment(models.Model):
    owner_id = models.IntegerField(default=1)
    text = models.CharField(max_length=1024, default='comment')
    date = models.DateField(default='2022-01-01')

