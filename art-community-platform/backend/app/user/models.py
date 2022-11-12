import datetime

import django.utils.timezone
from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100, default='Artie')
    birthdate = models.DateField(default=django.utils.timezone.now)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=256)
    email = models.CharField(max_length=100)
    token = models.CharField(max_length=256)

    def __str__(self):
        self.email + " " + self.token
