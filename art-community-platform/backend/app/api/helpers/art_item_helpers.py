from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag
from .tag_helpers import get_tag_by_id_helper


def get_art_item_by_id_helper(art_item_id):
    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return

    try:
        u = User.objects.get(id=a.owner_id)
    except:
        return

    if a.comments is not None:
        comment_count = len(a.comments)
    else:
        comment_count = 0

    if a.favourites is not None:
        favourite_count = len(a.favourites)
    else:
        favourite_count = 0

    return {"id": a.id, "owner_name": u.name, "img_url": a.img_url, "description": a.description, "date": a.date,
            "tags:": a.tags, "comment_count": comment_count, "favourite_count": favourite_count}
