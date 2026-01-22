import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import Login from "./pages/Login";
import { useAuth } from "./auth/AuthContext";
import { useState } from "react";

function App() {
  const { token } = useAuth();
  const [page, setPage] = useState("dashboard");

  if (!token) {
    return <Login />;
  }

  return (
    <Layout setPage={setPage}>
      {page === "dashboard" && <Dashboard />}
      {page === "market" && <Market />}
    </Layout>
  );
}

export default App;
