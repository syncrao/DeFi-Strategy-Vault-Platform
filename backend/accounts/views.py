from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
from .models import User

class WalletPing(APIView):
    parser_classes = [JSONParser]

    def post(self, request):
        wallet = request.data.get("wallet_address")

        if not wallet:
            return Response(
                {"error": "wallet_address is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        wallet = wallet.lower()

        user, created = User.objects.get_or_create(
            wallet_address=wallet
        )

        return Response(
            {
                "wallet_address": user.wallet_address,
                "created": created
            },
            status=status.HTTP_200_OK
        )
