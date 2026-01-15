from django.urls import path
from .views import CryptoMarketView

urlpatterns = [
    path('crypto/<int:asset_id>/', CryptoMarketView.as_view()),
]
