from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank, TrigramSimilarity
from django.views.generic import ListView
from .art_item_helpers import get_art_item_by_id_helper
from ..models.exhibition import Exhibition
from ..models.user import User
from ..models.art_item import ArtItem
from ..models.comment import Comment
from ..models.tag import Tag


def search_users_helper(query):
    search_vector = SearchVector("name", "username", "email")

    return (
        User.objects.annotate(
           similarity=TrigramSimilarity(query, 'name')
        ).filter(similarity__gt=0.3).order_by('-similarity')
    )
