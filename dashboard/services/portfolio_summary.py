from portfolio.models import Holding
from market.services.coingecko import get_crypto_price
from market.services.alphavantage import get_stock_quote

def get_current_price(asset):
    if asset.asset_type == "CRYPTO":
        data = get_crypto_price(asset.coingecko_id)
        return data[asset.coingecko_id]["usd"]

    if asset.asset_type == "STOCK":
        data = get_stock_quote(asset.symbol)
        return float(data["Global Quote"]["05. price"])

    return 0


def get_portfolio_summary(user):
    holdings = Holding.objects.filter(user=user)

    total_invested = 0
    total_current_value = 0
    assets_breakdown = []

    for holding in holdings:
        invested = holding.quantity * holding.avg_buy_price
        current_price = get_current_price(holding.asset)
        current_value = holding.quantity * current_price
        pnl = current_value - invested

        total_invested += invested
        total_current_value += current_value

        assets_breakdown.append({
            "symbol": holding.asset.symbol,
            "name": holding.asset.name,
            "asset_type": holding.asset.asset_type,
            "quantity": holding.quantity,
            "avg_buy_price": holding.avg_buy_price,
            "current_price": current_price,
            "invested": invested,
            "current_value": current_value,
            "pnl": pnl
        })

    return {
        "total_invested": round(total_invested, 2),
        "total_value": round(total_current_value, 2),
        "total_pnl": round(total_current_value - total_invested, 2),
        "assets": assets_breakdown
    }
