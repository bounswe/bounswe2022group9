from django.db import models


class GithubUsers(models.Model):
    github_username = models.CharField(max_length=40)
    name = models.CharField(max_length=40)
    email = models.CharField(max_length=80)
    public_repos = models.IntegerField()
    followers = models.IntegerField()

    def __str__(self):
        return self.github_username


