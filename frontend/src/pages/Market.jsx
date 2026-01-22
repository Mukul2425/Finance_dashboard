import MarketSnapshot from "../components/MarketSnapshot";
import MarketTable from "../components/MarketTable";

export default function Market() {
  return (
    <div className="flex flex-col gap-8">
      <MarketSnapshot />
      <MarketTable />
    </div>
  );
}
