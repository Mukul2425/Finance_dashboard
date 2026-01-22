import { useAuth } from "../auth/AuthContext";

export default function Sidebar({ setPage }) {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-[#0f1623] border-r border-gray-800 flex flex-col p-6">
      <h1 className="text-xl font-bold text-white mb-8">
        FinDash
      </h1>

      <nav className="flex flex-col gap-4 text-gray-400 flex-1">
        <button
          onClick={() => setPage("dashboard")}
          className="text-left hover:text-white"
        >
          Dashboard
        </button>

        <button
          onClick={() => setPage("market")}
          className="text-left hover:text-white"
        >
          Market
        </button>
      </nav>

      <button
        onClick={logout}
        className="text-red-400 hover:text-red-500 text-sm"
      >
        Logout
      </button>
    </div>
  );
}
