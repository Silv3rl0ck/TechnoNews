from rest_framework import serializers
from .models import Article, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['_id', 'name', 'slug']

class ArticleSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Article
        fields = ['_id', 'title', 'slug', 'excerpt', 'content', 'image_url', 'created_at', 'updated_at', 'category']
