from ..models.user import User
from ..models.art_item import ArtItem

number_of_arts_to_recommend_new_users = 20


def popular_art_items():
    arts = ArtItem.objects.all()

    # reverse= True for sorting by ascending order
    # we are sorting the arts according to sum of their favourite count and comment count
    arts = sorted(arts, key=lambda x: (len(x.favourites)+len(x.comments)), reverse=True)

    art_ids = [a.id for a in arts]

    if len(arts) < number_of_arts_to_recommend_new_users:
        return art_ids

    return art_ids[:number_of_arts_to_recommend_new_users]


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




