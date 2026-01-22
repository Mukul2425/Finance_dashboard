import { useEffect, useState } from "react";
import { fetchPublicMarketSnapshot } from "../api/market";

export default function MarketTable() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPublicMarketSnapshot().then(setData);
  }, []);

  if (!data) {
    return <div className="text-gray-500">Loading market data…</div>;
  }

  const safe = (value, fallback = "—") =>
  value === null || value === undefined ? fallback : value;

    const rows = [
    { name: "Bitcoin", price: safe(data.crypto?.BTC?.usd), change: safe(data.crypto?.BTC?.usd_24h_change) },
    { name: "Ethereum", price: safe(data.crypto?.ETH?.usd), change: safe(data.crypto?.ETH?.usd_24h_change) },
    { name: "S&P 500", price: safe(data.indices?.SP500?.["05. price"]), change: safe(data.indices?.SP500?.["10. change percent"]) },
    { name: "Gold", price: safe(data.commodities?.GOLD?.["05. price"]), change: safe(data.commodities?.GOLD?.["10. change percent"]) },
    ];


  return (
    <div className="bg-[#0f1623] border border-gray-800 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-[#0b0f14] text-gray-400">
          <tr>
            <th className="text-left p-4">Asset</th>
            <th className="text-right p-4">Price</th>
            <th className="text-right p-4">24h Change</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-gray-800 hover:bg-[#111827]">
              <td className="p-4 text-white">{r.name}</td>
              <td className="p-4 text-right text-white">${r.price}</td>
              <td className={`p-4 text-right ${String(r.change).includes("-") ? "text-red-400" : "text-green-400"}`}>
                {r.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
