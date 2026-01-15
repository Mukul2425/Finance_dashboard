from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .services.portfolio_summary import get_portfolio_summary

class DashboardSummaryView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        summary = get_portfolio_summary(request.user)
        return Response(summary)
