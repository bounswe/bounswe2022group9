from django.db import models


class Annotation(models.Model):
    owner_id = models.IntegerField(default=0)
    art_item_id = models.IntegerField(default=0)
    annotation = models.JSONField()
