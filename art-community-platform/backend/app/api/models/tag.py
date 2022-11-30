from django.db import models
from django.contrib.postgres.fields import ArrayField


class Tag(models.Model):
    text = models.CharField(max_length=100, default='tag')

