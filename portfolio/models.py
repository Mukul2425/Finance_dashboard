from django.db import models
from django.contrib.auth.models import User
from market.models import Asset

class Holding(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    quantity = models.FloatField()
    avg_buy_price = models.FloatField()
    buy_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user', 'asset')

    def __str__(self):
        return f"{self.user.username} - {self.asset.symbol}"
class Watchlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'asset')

    def __str__(self):
        return f"{self.user.username} watches {self.asset.symbol}"