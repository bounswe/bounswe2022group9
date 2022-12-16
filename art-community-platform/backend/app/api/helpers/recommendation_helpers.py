from ..models.user import User
from ..models.art_item import ArtItem

number_of_arts_to_recommend_new_users = 20


def popular_art_items():
    arts = ArtItem.objects.all()

    # reverse= True for sorting by ascending order
    # we are sorting the arts according to sum of their favourite count and comment count
    arts = sorted(arts, key=lambda x: (len(x.favourites)+len(x.comments)), reverse=True)

    if len(arts) < number_of_arts_to_recommend_new_users:
        return arts

    return arts[:number_of_arts_to_recommend_new_users]

