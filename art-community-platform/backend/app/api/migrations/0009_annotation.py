# Generated by Django 3.2.16 on 2022-12-21 23:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20221201_0034'),
    ]

    operations = [
        migrations.CreateModel(
            name='Annotation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner_id', models.IntegerField(default=0)),
                ('art_item_id', models.IntegerField(default=0)),
                ('annotation', models.JSONField()),
            ],
        ),
    ]
