# Generated by Django 3.2.16 on 2022-11-21 13:23

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20221113_1327'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exhibition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner_id', models.IntegerField()),
                ('type', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('art_items', django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), size=None)),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('receiver_id', models.IntegerField()),
                ('text', models.CharField(max_length=1024)),
                ('date', models.DateField()),
            ],
        ),
        migrations.RemoveField(
            model_name='artitem',
            name='img_url',
        ),
        migrations.AddField(
            model_name='artitem',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
