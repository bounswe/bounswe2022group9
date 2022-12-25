import unittest

from django.test import TestCase, Client
from django.urls import resolve, reverse
from .. import views
from ..views.art_item import *
from ..views.auth import *
from ..views.comment import *
from ..views.exhibition import *
from ..views.favourite import favourite
from ..views.follow import follow, unfollow
from ..views.homepage import get_homepage
from ..views.notification import *
from ..views.tag import *
from ..views.user import *
from ..views.profile import *
from ..views.recommend import *


class TestUrls(TestCase):
    def test_login_url_is_resolved(self):
        url = reverse('login')
        self.assertEqual(resolve(url).func, login)

    def test_get_all_users_url_is_resolved(self):
        url = reverse('users')
        self.assertEqual(resolve(url).func, get_all_users)

    def test_get_all_art_items_url_is_resolved(self):
        url = reverse('art-items')
        self.assertEqual(resolve(url).func, get_all_art_items)

    def test_get_user_by_id_url_is_resolved(self):
        url = reverse('users/:id')
        self.assertEqual(resolve(url).func, get_user_by_id)

    def test_get_art_item_by_id_url_is_resolved(self):
        url = reverse('art-items/:id')
        self.assertEqual(resolve(url).func, get_art_item_by_id)

    def test_get_tag_by_id_url_is_resolved(self):
        url = reverse('tags/:id')
        self.assertEqual(resolve(url).func, get_tag_by_id)

    def test_get_comment_by_id_url_is_resolved(self):
        url = reverse('comments/:id')
        self.assertEqual(resolve(url).func, get_comment_by_id)

    def test_get_exhibition_by_id_url_is_resolved(self):
        url = reverse('exhibitions/:id')
        self.assertEqual(resolve(url).func, get_exhibition_by_id)

    def test_get_notification_by_id_url_is_resolved(self):
        url = reverse('notifications/:id')
        self.assertEqual(resolve(url).func, get_notification_by_id)

    def test_get_followers_of_user_url_is_resolved(self):
        url = reverse('users/:id/followers')
        self.assertEqual(resolve(url).func, get_followers_of_user)

    def test_get_followings_of_user_url_is_resolved(self):
        url = reverse('users/:id/followings')
        self.assertEqual(resolve(url).func, get_followings_of_user)

    def test_get_favourites_of_user_url_is_resolved(self):
        url = reverse('users/:id/favourites')
        self.assertEqual(resolve(url).func, get_favourites_of_user)

    def test_get_comments_of_user_url_is_resolved(self):
        url = reverse('users/:id/comments')
        self.assertEqual(resolve(url).func, get_comments_of_user)

    def test_get_exhibitions_of_user_url_is_resolved(self):
        url = reverse('users/:id/exhibitions')
        self.assertEqual(resolve(url).func, get_exhibitions_of_user)

    def test_get_notifications_of_user_url_is_resolved(self):
        url = reverse('users/:id/notifications')
        self.assertEqual(resolve(url).func, get_notifications_of_user)

    def test_get_favourites_of_art_item_url_is_resolved(self):
        url = reverse('art-items/:id/favourites')
        self.assertEqual(resolve(url).func, get_favourites_of_art_item)

    def test_get_comments_of_art_item_url_is_resolved(self):
        url = reverse('art-items/:id/comments')
        self.assertEqual(resolve(url).func, get_comments_of_art_item)

    def test_create_exhibition_url_is_resolved(self):
        url = reverse('exhibition')
        self.assertEqual(resolve(url).func, create_exhibition)

    def test_follow_url_is_resolved(self):
        url = reverse('follow')
        self.assertEqual(resolve(url).func, follow)

    def test_favourite_url_is_resolved(self):
        url = reverse('favourite')
        self.assertEqual(resolve(url).func, favourite)

    def test_comment_url_is_resolved(self):
        url = reverse('comment')
        self.assertEqual(resolve(url).func, comment)

    def test_get_homepage_url_is_resolved(self):
        url = reverse('homepage')
        self.assertEqual(resolve(url).func, get_homepage)

    def test_get_profile_info_url_is_resolved(self):
        url = reverse('get_profile_info')
        self.assertEqual(resolve(url).func, get_profile_info)

    def test_update_profile_info_url_is_resolved(self):
        url = reverse('update_profile_info')
        self.assertEqual(resolve(url).func, update_profile_info)

    def test_signup_url_is_resolved(self):
        url = reverse('signup')
        self.assertEqual(resolve(url).func, signup)

    def test_unfollow_url_is_resolved(self):
        url = reverse('unfollow')
        self.assertEqual(resolve(url).func, unfollow)

    def test_recommend_art_item_url_is_resolved(self):
        url = reverse('recommend_art_items')
        self.assertEqual(resolve(url).func, recommend_art_items)
    
    def test_recommend_user_is_resoled(self):
        url = reverse('recommend_users_to_follow')
        self.assertEqual(resolve(url).func,recommend_users_to_follow)

