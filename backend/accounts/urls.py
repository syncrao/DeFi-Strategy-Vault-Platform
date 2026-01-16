from django.urls import path
from .views import WalletPing

urlpatterns = [
    path("wallet/", WalletPing.as_view()),
]
