import { useEffect, useState } from "react";
import { fetchPublicMarketSnapshot } from "../api/market";

export default function MarketSnapshot() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPublicMarketSnapshot().then(setData);
  }, []);

  if (!data) {
    return (
      <div className="text-gray-500">
        Loading market snapshot…
      </div>
    );
  }

  const safe = (value, fallback = "—") =>
    value === null || value === undefined ? fallback : value;

  const cards = [
    {
      label: "Bitcoin",
      price: safe(data.crypto?.BTC?.usd),
      change: safe(data.crypto?.BTC?.usd_24h_change),
    },
    {
      label: "Ethereum",
      price: safe(data.crypto?.ETH?.usd),
      change: safe(data.crypto?.ETH?.usd_24h_change),
    },
    {
      label: "S&P 500",
      price: safe(data.indices?.SP500?.["05. price"]),
      change: safe(data.indices?.SP500?.["10. change percent"]),
    },
    {
      label: "Gold",
      price: safe(data.commodities?.GOLD?.["05. price"]),
      change: safe(data.commodities?.GOLD?.["10. change percent"]),
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((c) => (
        <div
          key={c.label}
          className="bg-[#0f1623] p-5 rounded-xl border border-gray-800"
        >
          <p className="text-gray-400 text-sm">{c.label}</p>
          <h3 className="text-xl font-semibold text-white">
            ${c.price}
          </h3>
          <p
            className={`text-sm ${
              String(c.change).includes("-")
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {c.change}
          </p>
        </div>
      ))}
    </div>
  );
}
