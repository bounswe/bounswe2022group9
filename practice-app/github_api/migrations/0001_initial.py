# Generated by Django 3.2.3 on 2022-05-19 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GithubUsers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('github_username', models.CharField(max_length=40)),
                ('name', models.CharField(max_length=40)),
                ('email', models.CharField(max_length=80)),
                ('public_repos', models.IntegerField()),
                ('followers', models.IntegerField()),
            ],
        ),
    ]
