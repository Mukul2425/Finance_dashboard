import { useEffect, useState } from "react";
import TopStats from "../components/TopStats";
import PortfolioChart from "../components/PortfolioChart";
import { fetchDashboardSummary } from "../api/dashboard";
import { useAuth } from "../auth/AuthContext";
import MarketSnapshot from "../components/MarketSnapshot";

export default function Dashboard() {
  const { token } = useAuth();
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSummary(null);
    setError(null);

    fetchDashboardSummary(token)
      .then(setSummary)
      .catch(() => setError("Failed to load dashboard data"));
  }, [token]);

  if (error) {
    return <div className="text-red-400">{error}</div>;
  }

  if (!summary) {
    return <div className="text-gray-400">Loading dashboard…</div>;
  }

  return (
    <div className="flex flex-col gap-8">

      {/* 🔥 MARKET SNAPSHOT — ALWAYS AT TOP */}
      <MarketSnapshot />

      {/* PERSONAL PORTFOLIO SECTION */}
      <TopStats summary={summary} />
      <PortfolioChart assets={summary.assets} />

    </div>
  );
}
