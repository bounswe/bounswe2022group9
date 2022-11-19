from .art_item_helpers import get_art_item_by_id_helper
from ..models import User, ArtItem, Tag


def get_user_by_id_helper(user_id):
    try:
        u = User.objects.get(id=user_id)
    except:
        return None

    art_items = []
    for art_item_id in u.art_items:
        art_items.append(get_art_item_by_id_helper(art_item_id))

    return {"id": u.id, "username": u.username, "email": u.email, "birthdate": u.birthdate, "name": u.name,
            "art_items:": art_items, "profile_img_url": u.profile_img_url, "location": u.location}


# TODO : find more generic name instead of user (follower, following, favourite)

def get_follower_by_id_helper(follower_id):
    try:
        f = User.objects.get(id=follower_id)
    except:
        return None

    return {"id": f.id, "username": f.username, "name": f.name,
            "profile_img_url": f.profile_img_url, "location": f.location}
