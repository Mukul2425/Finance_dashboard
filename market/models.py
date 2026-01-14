from django.db import models

class Asset(models.Model):
    ASSET_TYPE_CHOICES = [
        ('STOCK', 'Stock'),
        ('CRYPTO', 'Crypto'),
    ]

    symbol = models.CharField(max_length=20)
    name = models.CharField(max_length=100)
    asset_type = models.CharField(max_length=10, choices=ASSET_TYPE_CHOICES)
    exchange = models.CharField(max_length=50, blank=True, null=True)
    currency = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('symbol', 'asset_type')

    def __str__(self):
        return f"{self.symbol} ({self.asset_type})"
