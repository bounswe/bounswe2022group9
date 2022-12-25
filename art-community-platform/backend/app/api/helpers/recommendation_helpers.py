from ..models.user import User
from ..models.art_item import ArtItem
from .art_item_helpers import *

number_of_arts_to_recommend_new_users = 20


def popular_art_items():
    arts = ArtItem.objects.all()

    # reverse= True for sorting by ascending order
    # we are sorting the arts according to sum of their favourite count and comment count
    arts = sorted(arts, key=lambda x: (len(x.favourites)+len(x.comments)), reverse=True)

    art_ids = [a.id for a in arts]

    if len(arts) < number_of_arts_to_recommend_new_users:
        return [get_art_item_by_id_helper(art_id) for art_id in art_ids]

    return [get_art_item_by_id_helper(art_id) for art_id in art_ids[:number_of_arts_to_recommend_new_users]]


"""
there are different criterias for deciding whether a user is new or not,
the function below is new user detection method for art recommendation
"""
def is_new_user_for_art_recommendation(user):
    return len(user.favourites) < 5


def get_tags_of_favourites(user):
    tags = set()
    for art_id in user.favourites:
        try:
            tags_in_this_art = ArtItem.objects.get(id=art_id).tags
            for t in tags_in_this_art:
                tags.add(t)
        except:
            pass
    return tags


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

def is_new_users_wrt_followings(user_id):
    u = None

    try:
        user = User.objects.get(id = user_id)
    except:
        return [False,"cannot fetch user from user id"]

    followings = user.followings
    followings_count = len(followings)

    if followings_count < 3:
        return True
    
    else:
        return False

    


