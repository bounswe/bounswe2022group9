from django.contrib import admin
from .models.user import User
from .models.art_item import ArtItem
from .models.comment import Comment
from .models.notification import Notification
from .models.exhibition import Exhibition
from .models.tag import Tag
from .models.annotation import Annotation


admin.site.register(User)
admin.site.register(ArtItem)
admin.site.register(Comment)
admin.site.register(Tag)
admin.site.register(Exhibition)
admin.site.register(Notification)
admin.site.register(Annotation)
