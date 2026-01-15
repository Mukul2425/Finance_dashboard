from django.contrib import admin
from .models import Asset

admin.site.register(Asset)

from .models import Asset, PriceCache

admin.site.register(PriceCache)
