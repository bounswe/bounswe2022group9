from django.db import models

# Create your models here.

"""
    Model for Race Standing
"""
class RaceStanding(models.Model):
    race_year = models.CharField(max_length=20)
    race_round = models.CharField(max_length=10)
    race_standing = models.CharField(max_length=10000)

    def __str__(self):
        self.race_year+" "+self.race_round
