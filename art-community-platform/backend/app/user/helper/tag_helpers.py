
from ..models import User, ArtItem, Tag


def get_tag_by_id_helper(tag_id):
    try:
        t = Tag.objects.get(id=tag_id)
    except:
        return

    return {"id": t.id, "text": t.text}

