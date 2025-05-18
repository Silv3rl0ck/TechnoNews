# backend/articles/models.py
from django.db import models



class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name  


class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    excerpt = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image_url = models.URLField()
    slug = models.SlugField(unique=True)