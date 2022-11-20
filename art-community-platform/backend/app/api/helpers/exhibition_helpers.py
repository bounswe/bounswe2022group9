from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


def get_exhibition_by_id_helper(exhibition_id):

    return {"id": exhibition_id, "name": "crazy exhibition",
            "date": "2022-11-11", "type": "physical", "locations": "Istanbul"}
