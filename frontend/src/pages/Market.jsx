import MarketSnapshot from "../components/MarketSnapshot";
import MarketTable from "../components/MarketTable";
import TopMovers from "../components/TopMovers";

export default function Market() {
  return (
    <div className="flex flex-col gap-8">

      {/* Top summary cards */}
      <MarketSnapshot />

      {/* Dense market layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MarketTable />
        </div>

        <TopMovers />
      </div>

    </div>
  );
}
