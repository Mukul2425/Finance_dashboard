import requests

BASE_URL = "https://api.coingecko.com/api/v3"

def get_crypto_price(coin_id):
    url = f"{BASE_URL}/simple/price"
    params = {
        "ids": coin_id,
        "vs_currencies": "usd",
        "include_24hr_change": "true"
    }
    response = requests.get(url, params=params)
    response.raise_for_status()
    return response.json()


def get_crypto_market_chart(coin_id, days=7):
    url = f"{BASE_URL}/coins/{coin_id}/market_chart"
    params = {
        "vs_currency": "usd",
        "days": days
    }
    response = requests.get(url, params=params)
    response.raise_for_status()
    return response.json()
