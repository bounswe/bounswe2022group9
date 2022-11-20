from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


def send_notification(receiver_id, text, date):
    try:
        # TODO: Tag will change to Notification
        n = Tag.objects.create(receiver_id=receiver_id, text=text, date=date)
    except:
        return None

    try:
        r = User.objects.get(id=receiver_id)
    except:
        return None

    try:
        notifications_of_r = r.notifications
        notifications_of_r.append(n.id)
        User.objects.filter(id=r.id).update(notifications=notifications_of_r)
    except:
        return None

    return


def get_notification_by_id_helper(notification_id):
    try:
        # TODO: Tag will change to Notification
        n = Tag.objects.get(id=notification_id)
    except:
        return None

    return {"id": n.id, "text": n.text, "date": n.date}
