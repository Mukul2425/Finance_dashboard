import { useEffect, useState } from "react";
import TopStats from "../components/TopStats";
import PortfolioChart from "../components/PortfolioChart";
import { fetchDashboardSummary } from "../api/dashboard";
import { TOKEN } from "../api/token";

export default function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardSummary(TOKEN)
      .then((data) => {
        console.log("Dashboard summary:", data);
        setSummary(data);
      })
      .catch((err) => {
        console.error("Dashboard error:", err);
        setError(err);
      });
  }, []);

  if (error) {
    return (
      <div className="text-red-400">
        Failed to load dashboard data
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="text-gray-400">
        Loading dashboard…
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <TopStats summary={summary} />
      <PortfolioChart assets={summary.assets} />
    </div>
  );
}
