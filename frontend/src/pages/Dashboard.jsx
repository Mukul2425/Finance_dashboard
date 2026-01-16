import TopStats from "../components/TopStats";
import PortfolioChart from "../components/PortfolioChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <TopStats />
      <PortfolioChart />
    </div>
  );
}
