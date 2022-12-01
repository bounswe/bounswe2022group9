from .art_item_helpers import get_art_item_by_id_helper
from ..models.exhibition import Exhibition
from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


def get_exhibition_by_id_helper(exhibition_id):
    try:
        e = Exhibition.objects.get(id=exhibition_id)
    except:
        return None

    try:
        owner = User.objects.get(id=e.owner_id)
    except:
        return None

    try:
        art_items = []
        for art_item_id in e.art_items:
            art_items.append(get_art_item_by_id_helper(art_item_id))
    except:
        art_items = []

    return {"id": e.id, "owner_name": owner.name, "type": e.type, "name": e.name, "description": e.description,
            "location": e.location, "open_address": e.open_address, "start_time": e.start_time,
            "end_time": e.end_time, "date": e.date, "art_items": art_items}


def get_exhibition_by_id_simple(exhibition_id):
    try:
        e = Exhibition.objects.get(id=exhibition_id)
    except:
        return None

    try:
        owner = User.objects.get(id=e.owner_id)
    except:
        return None

    return {"id": e.id, "name": e.name, "owner_name": owner.name, "type": e.type,
            "location": e.location, "date": e.date}
