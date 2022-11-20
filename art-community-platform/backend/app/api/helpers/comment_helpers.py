from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


def get_comment_by_id_helper(comment_id):
    try:
        c = Comment.objects.get(id=comment_id)
    except:
        return None

    try:
        u = User.objects.get(id=c.owner_id)
    except:
        return None

    return {"id": c.id, "owner_name": u.name, "text": c.text, "date": c.date}
