from ..models import User, ArtItem, Tag, Comment


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
