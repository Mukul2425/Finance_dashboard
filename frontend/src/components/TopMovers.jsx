import { useEffect, useState } from "react";
import { fetchPublicMarketSnapshot } from "../api/market";

export default function TopMovers() {
  const [movers, setMovers] = useState([]);

  useEffect(() => {
    fetchPublicMarketSnapshot().then((data) => {
      setMovers(data.movers || []);
    });
  }, []);

  return (
    <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        Top Crypto Movers (24h)
      </h3>

      <div className="flex flex-col gap-3">
        {movers.map((m) => (
          <div key={m.name} className="flex justify-between text-sm">
            <span className="text-gray-300">{m.name}</span>
            <span className="text-white">${m.price}</span>
            <span className={m.change >= 0 ? "text-green-400" : "text-red-400"}>
              {m.change?.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
