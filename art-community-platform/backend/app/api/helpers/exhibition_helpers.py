from .art_item_helpers import get_art_item_by_id_helper
from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


def get_exhibition_by_id_helper(exhibition_id):
    try:
        # TODO: Tag will change to Exhibition
        e = Tag.objects.get(id=exhibition_id)
    except:
        return None

    try:
        owner = User.objects.get(id=e.owner_id)
    except:
        return None

    art_items = []
    for art_item_id in e.art_items:
        art_items.append(get_art_item_by_id_helper(art_item_id))

    return {"id": e.id, "owner_name": owner.name, "type": e.type,
                         "location": e.location, "date": e.date, "art_items": art_items}

