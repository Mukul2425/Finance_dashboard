import Sidebar from "./Sidebar";

export default function Layout({ children, setPage }) {
  return (
    <div className="flex min-h-screen bg-[#0b0f14] text-white">
      <Sidebar setPage={setPage} />
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
