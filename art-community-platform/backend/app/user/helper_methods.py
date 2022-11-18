
from .models import User, ArtItem, Tag


def get_tag_by_id_helper(tag_id):
    try:
        t = Tag.objects.get(id=tag_id)
    except:
        return

    return {"id": t.id, "text": t.text}


def get_art_item_by_id_helper(art_item_id):
    try:
        a = ArtItem.objects.get(id=art_item_id)
    except:
        return

    try:
        u = User.objects.get(id=a.owner_id)
    except:
        return

    tags = []
    for tag_id in a.tags:
        tags.append(get_tag_by_id_helper(tag_id))

    if a.comments is not None:
        comment_count = len(a.comments)
    else:
        comment_count = 0

    if a.favourites is not None:
        favourite_count = len(a.favourites)
    else:
        favourite_count = 0

    return {"id": a.id, "owner_name": u.name, "img_url": a.img_url, "description": a.description, "date": a.date,
            "tags:": tags, "comment_count": comment_count, "favourite_count": favourite_count}