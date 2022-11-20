from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


def get_tag_by_id_helper(tag_id):
    try:
        t = Tag.objects.get(id=tag_id)
    except:
        return None

    return {"id": t.id, "text": t.text}
