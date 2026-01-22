from .coingecko import get_crypto_price
from .alphavantage import get_stock_quote
import logging

logger = logging.getLogger(__name__)

def safe_crypto(coin):
    try:
        return get_crypto_price(coin).get(coin)
    except Exception as e:
        logger.warning(f"Crypto API failed: {coin} - {e}")
        return None

def safe_stock(symbol):
    try:
        return get_stock_quote(symbol).get("Global Quote")
    except Exception as e:
        logger.warning(f"Stock API failed: {symbol} - {e}")
        return None

def get_market_snapshot():
    btc = safe_crypto("bitcoin")
    eth = safe_crypto("ethereum")

    spy = safe_stock("SPY")
    qqq = safe_stock("QQQ")
    gld = safe_stock("GLD")

    return {
        "crypto": {
            "BTC": btc,
            "ETH": eth,
        },
        "indices": {
            "SP500": spy,
            "NASDAQ": qqq,
        },
        "commodities": {
            "GOLD": gld,
        }
    }
