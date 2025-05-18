# backend/articles/views.py
from rest_framework.generics import RetrieveAPIView, ListAPIView
from .models import Article
from .serializers import ArticleSerializer

class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'slug'  # Make sure to add this!
