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
