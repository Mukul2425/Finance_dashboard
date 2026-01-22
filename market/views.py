from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Asset
from .services.coingecko import get_crypto_price, get_crypto_market_chart
from .services.alphavantage import get_stock_quote, get_stock_daily
from rest_framework import status

class CryptoMarketView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, asset_id):
        asset = Asset.objects.get(id=asset_id, asset_type='CRYPTO')

        if not asset.coingecko_id:
            return Response({"error": "CoinGecko ID not set"}, status=400)

        price = get_crypto_price(asset.coingecko_id)
        chart = get_crypto_market_chart(asset.coingecko_id)

        return Response({
            "asset": asset.symbol,
            "price": price,
            "market_chart": chart
        })



class StockMarketView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, asset_id):
        asset = Asset.objects.get(id=asset_id, asset_type='STOCK')

        quote = get_stock_quote(asset.symbol)
        history = get_stock_daily(asset.symbol)

        return Response({
            "asset": asset.symbol,
            "quote": quote,
            "history": history
        }, status=status.HTTP_200_OK)
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.cache import cache
from market.services.snapshot import get_market_snapshot

class PublicMarketSnapshotView(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        cached = cache.get("public_market_snapshot")

        try:
            data = get_market_snapshot()
            if any(data.values()):
                cache.set("public_market_snapshot", data, 300)
                return Response(data)
        except Exception:
            pass

        # fallback to cache if API fails
        if cached:
            return Response(cached)

        return Response({
            "crypto": {},
            "indices": {},
            "commodities": {},
            "error": "Market temporarily unavailable"
        })

