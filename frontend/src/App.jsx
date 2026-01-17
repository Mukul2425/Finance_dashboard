import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useAuth } from "./auth/AuthContext";

function App() {
  const { token } = useAuth();

  if (!token) {
    return <Login />;
  }

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default App;
