from .art_item_helpers import get_art_item_by_id_helper
from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag
import re


def get_user_by_id_helper(user_id):
    try:
        u = User.objects.get(id=user_id)
    except:
        return None

    try:
        art_items = []
        for art_item_id in u.art_items:
            art_items.append(get_art_item_by_id_helper(art_item_id))
    except:
        art_items = []

    return {"id": u.id, "username": u.username, "email": u.email, "birthdate": u.birthdate, "name": u.name,
            "art_items:": art_items, "profile_img_url": u.profile_img_url, "location": u.location}


# TODO : find more generic name instead of api (follower, following, favourite)

def get_follower_by_id_helper(follower_id):
    try:
        f = User.objects.get(id=follower_id)
    except:
        return None

    return {"id": f.id, "username": f.username, "name": f.name,
            "profile_img_url": f.profile_img_url, "location": f.location}


def get_followers_by_user_id_helper(user_id):

    try:
        u = User.objects.get(id=user_id)
    
    except:
        return None

    follower_list = u.followers

    return {"followers":follower_list}


def get_art_items_by_user_id_helper(user_id):

    try:
        u = User.objects.get(id=user_id)
    
    except:
        return None

    art_item_list = u.art_items

    return {"art_items":art_item_list}


def get_followings_by_user_id_helper(user_id):

    try:
        u = User.objects.get(id=user_id)
    
    except:
        return None

    following_list = u.followings

    return {"followings":following_list}




def validate_password_helper(password):
    if len(password) < 8:
        return [False, "password can't be shorter than 8 characters"]
    lower = False
    upper = False
    digit = False
    for p in password:
        if ord("0") <= ord(p) <= ord("9"):
            digit = True
        if ord("a") <= ord(p) <= ord("z"):
            lower = True
        if ord("A") <= ord(p) <= ord("Z"):
            upper = True
    if not upper:
        return [False, "password should contain at least one upper case letter"]
    if not lower:
        return [False, "password should contain at least one lower case letter"]
    if not digit:
        return [False, "password should contain at least one numerical digit"]
    return [True, ""]


def validate_email_helper(email):
    m = re.match(r"(\w|\.)*@\w*.com", email)
    if m is None:
        return [False, "email is invalid"]
    return [True, ""]


def validate_username_helper(username):
    if len(username) < 5:
        return [False, "username can't be shorter than 5 characters"]
    return [True, ""]


# deletes follower_id from followers list of user with followed_id
def delete_user_from_followers(follower_id, followed_id):
    follower_user = None
    followed_user = None
    # check whether users exist or not
    try:
        follower_user = User.objects.get(id=follower_id)
        followed_user = User.objects.get(id=followed_id)
    except:
        return [False, "either follower_id or followed_id is not true"]
    # check whether user with follower_id follows user with followed_id
    if followed_user.followers.count(follower_id) == 0:
        return [False, "follower not exist"]
    # remove follower and save the object to the database
    followed_user.followers.remove(follower_id)
    followed_user.save()
    # success case
    return [True, ""]


# deletes following_id from followings list of user with follower_id
def delete_user_from_following(follower_id, followed_id):
    follower_user = None
    followed_user = None
    # check whether users exist or not
    try:
        follower_user = User.objects.get(id=follower_id)
        followed_user = User.objects.get(id=followed_id)
    except:
        return [False, "either follower_id or followed_id is not true"]
    # check whether user with follower_id follows user with followed_id
    if follower_user.followings.count(followed_id) == 0:
        return [False, "follower not exist"]
    # remove follower and save the object to the database
    follower_user.followings.remove(followed_id)
    follower_user.save()
    # success case
    return [True, ""]

#get 8 most popular users in the system
def get_popular_users():
    try:
        user_list = User.objects.all()

    except:
        return [False, "couldnt get the users from database"]

    #This is the list that is sorted by number of followers in decreasing order
    new_list = sorted(user_list,key=lambda user: len(user.followers),reverse=True)


    if len(new_list)<8:
        return new_list
    else:
        new_list[:8]

    return new_list



# get user id as a parameter returning users having at least one follower that is followed by the user with the given id.
def get_related_users(user_id):

    try:
        u = User.objects.get(id = user_id)
        following_list = u.followings

    except:
        return [False,"can not fetch following user"]

    
    second_level_following = []

    for following_user_id in following_list:
        following_user = User.objects.get(user_id = following_user_id)
        second_level_following.append(following_user.followings)

    # removing duplicates
    new_list = list(set(second_level_following))

    return new_list

        


