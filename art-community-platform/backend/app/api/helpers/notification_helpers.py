from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


def get_notification_by_id_helper(notification_id):

    return {"id": notification_id, "text": "xxx xxx started following you", "date": "2022-12-12"}
