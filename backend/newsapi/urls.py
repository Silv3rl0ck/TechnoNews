from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/articles/', include('articles.urls')),  # Make sure this matches
]
