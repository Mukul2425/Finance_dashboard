from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Holding
from .serializers import HoldingSerializer

class HoldingListCreateView(generics.ListCreateAPIView):
    serializer_class = HoldingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Holding.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
