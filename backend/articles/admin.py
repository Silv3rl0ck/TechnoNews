# backend/articles/admin.py
from django.contrib import admin
from .models import Article, Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    
@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'published_date')
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('category', 'published_date')