from django.contrib import admin

from .models import Expert, Tutorial


@admin.register(Expert)
class ExpertAdmin(admin.ModelAdmin):
    list_display = 'name', 'university', 'department', 'rate', 'updated'


@admin.register(Tutorial)
class TutorialAdmin(admin.ModelAdmin):
    list_display = 'name', 'expert', 'hours', 'updated'
