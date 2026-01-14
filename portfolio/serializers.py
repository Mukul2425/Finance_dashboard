from rest_framework import serializers
from .models import Holding
from market.models import Asset

class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = ['id', 'symbol', 'name', 'asset_type', 'currency']

class HoldingSerializer(serializers.ModelSerializer):
    asset = AssetSerializer(read_only=True)
    asset_id = serializers.PrimaryKeyRelatedField(
        queryset=Asset.objects.all(),
        source='asset',
        write_only=True
    )

    class Meta:
        model = Holding
        fields = [
            'id',
            'asset',
            'asset_id',
            'quantity',
            'avg_buy_price',
            'buy_date',
            'created_at'
        ]
