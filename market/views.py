from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Asset
from .services.coingecko import get_crypto_price, get_crypto_market_chart

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
