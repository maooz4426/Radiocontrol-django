from django.urls import path,re_path
from . import consumers

websocket_urlpatterns = [
    path('ws/control/', consumers.RadioControlConsumer.as_asgi()),
    # re_path('ws/control/', consumers.RadioControlConsumer.as_asgi()),
]