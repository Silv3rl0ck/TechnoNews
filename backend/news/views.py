from rest_framework import viewsets
from .models import Article, Category
from .serializers import ArticleSerializer, CategorySerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        queryset = Article.objects.all()
        cat = self.request.query_params.get('category')
        slug = self.request.query_params.get('slug')
        if cat:
            queryset = queryset.filter(category__slug=cat)
        if slug:
            queryset = queryset.filter(slug=slug)
        return queryset
