
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    #追加
    path('', include('unity_controller.urls')),
]