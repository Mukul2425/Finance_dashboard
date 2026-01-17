export default function TopStats({ summary }) {
  if (!summary) return null;

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-[#0f1623] p-6 rounded-xl border border-gray-800">
        <p className="text-gray-400 text-sm">Total Value</p>
        <h2 className="text-2xl font-semibold text-white">
          ${summary.total_value.toLocaleString()}
        </h2>
      </div>

      <div className="bg-[#0f1623] p-6 rounded-xl border border-gray-800">
        <p className="text-gray-400 text-sm">Invested</p>
        <h2 className="text-2xl font-semibold text-white">
          ${summary.total_invested.toLocaleString()}
        </h2>
      </div>

      <div className="bg-[#0f1623] p-6 rounded-xl border border-green-500/30">
        <p className="text-gray-400 text-sm">P&amp;L</p>
        <h2 className="text-2xl font-semibold text-green-400">
          ${summary.total_pnl.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}
