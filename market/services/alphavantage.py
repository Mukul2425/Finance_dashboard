import requests
import os

API_KEY = os.getenv("ALPHA_VANTAGE_API_KEY")
BASE_URL = "https://www.alphavantage.co/query"

def get_stock_quote(symbol):
    params = {
        "function": "GLOBAL_QUOTE",
        "symbol": symbol,
        "apikey": API_KEY
    }
    r = requests.get(BASE_URL, params=params)
    r.raise_for_status()
    return r.json()

def get_stock_daily(symbol):
    params = {
        "function": "TIME_SERIES_DAILY",
        "symbol": symbol,
        "outputsize": "compact",
        "apikey": API_KEY
    }
    r = requests.get(BASE_URL, params=params)
    r.raise_for_status()
    return r.json()
