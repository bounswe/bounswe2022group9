from django.db import models


class PlayerInfo(models.Model):
    name = models.CharField(max_length=256)
    goal_count = models.CharField(max_length=256)
    assist_count = models.CharField(max_length=40)
    team = models.CharField(max_length=256)

    def __str__(self):
        return self.name
