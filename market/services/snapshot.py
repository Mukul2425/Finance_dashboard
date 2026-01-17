# market/services/snapshot.py

from .coingecko import get_crypto_price
from .alphavantage import get_stock_quote

def get_market_snapshot():
    btc = get_crypto_price("bitcoin")
    eth = get_crypto_price("ethereum")

    spy = get_stock_quote("SPY")
    qqq = get_stock_quote("QQQ")
    gld = get_stock_quote("GLD")

    return {
        "crypto": {
            "BTC": btc.get("bitcoin"),
            "ETH": eth.get("ethereum"),
        },
        "indices": {
            "SP500": spy.get("Global Quote"),
            "NASDAQ": qqq.get("Global Quote"),
        },
        "commodities": {
            "GOLD": gld.get("Global Quote"),
        }
    }
