# Generated by Django 3.2.3 on 2022-05-19 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geolocation_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ipaddresses',
            name='updated_on',
            field=models.CharField(max_length=256),
        ),
    ]
