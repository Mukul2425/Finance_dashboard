import TopStats from "../components/TopStats";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <TopStats />

      <div className="bg-[#0f1623] h-80 rounded-xl border border-gray-800 flex items-center justify-center text-gray-500">
        Chart area (coming next)
      </div>
    </div>
  );
}
