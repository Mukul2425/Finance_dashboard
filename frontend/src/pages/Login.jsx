import { useState } from "react";
import { loginUser } from "../api/auth";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await loginUser(username, password);
      login(data.access);
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f14]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f1623] p-8 rounded-xl border border-gray-800 w-96"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Login to FinDash
        </h2>

        {error && (
          <p className="text-red-400 mb-4">{error}</p>
        )}

        <input
          className="w-full mb-4 p-3 rounded bg-[#0b0f14] text-white border border-gray-700"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-6 p-3 rounded bg-[#0b0f14] text-white border border-gray-700"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
