# accounts/admin.py

from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        "wallet_address",
        "is_staff",
        "is_superuser",
        "is_active",
        "created_at",
    )
    search_fields = ("wallet_address",)
    list_filter = ("is_staff", "is_superuser", "is_active")
