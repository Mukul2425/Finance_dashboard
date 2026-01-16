export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0f1623] border-r border-gray-800 flex flex-col p-6">
      <h1 className="text-xl font-bold text-white mb-8">
        FinDash
      </h1>

      <nav className="flex flex-col gap-4 text-gray-400">
        <span className="text-green-400 font-medium">Dashboard</span>
        <span className="hover:text-white cursor-pointer">Portfolio</span>
        <span className="hover:text-white cursor-pointer">Watchlist</span>
        <span className="hover:text-white cursor-pointer">Settings</span>
      </nav>
    </div>
  );
}
