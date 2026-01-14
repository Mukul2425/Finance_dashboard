from django.urls import path
from .views import HoldingListCreateView

urlpatterns = [
    path('holdings/', HoldingListCreateView.as_view(), name='holdings'),
]
