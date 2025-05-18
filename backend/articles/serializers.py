from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    class Meta:
        model = Article
        fields = '__all__'
