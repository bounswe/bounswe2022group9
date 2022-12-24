from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag
from ..models.notification import *


def get_notification_by_id_helper(notification_id):

    return {"id": notification_id, "text": "xxx xxx started following you", "date": "2022-12-12"}


def get_notification_by_receiver_id_helper(receiver_id):
    # this function returns notifications going to "receiver_id"
    objects = Notification.objects.all()
    result = []
    for obj in objects:
        if obj.receiver_id == receiver_id:
            result.append(obj)
    return result
