# Generated by Django 3.2.16 on 2022-12-22 17:32

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_annotation'),
    ]

    operations = [
        migrations.AddField(
            model_name='artitem',
            name='annotations',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), default=[], size=None),
        ),
    ]