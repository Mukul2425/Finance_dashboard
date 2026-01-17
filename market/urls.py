from django.urls import path
from .views import CryptoMarketView, PublicMarketSnapshotView
from .views import StockMarketView

urlpatterns = [
    path('crypto/<int:asset_id>/', CryptoMarketView.as_view()),
    path('stock/<int:asset_id>/', StockMarketView.as_view()),
    path("public/snapshot/", PublicMarketSnapshotView.as_view()),

]
