from ipaddress import ip_address
from django.db import models


class IpAddresses(models.Model):
    ip_addr = models.CharField(max_length=256)
    country_name = models.CharField(max_length=256)
    country_id = models.CharField(max_length=40)
    updated_on = models.CharField(max_length=256)

def __str__(self):
    return self.ip_addr


