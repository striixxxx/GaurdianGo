import { useState } from "react";
import { Lock, User } from "lucide-react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert("Login successful!");
      localStorage.setItem("loggedIn", "true");
      window.location.href = "/";
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-300 via-blue-200 to-cyan-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md transition hover:shadow-2xl"
      >
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Login
        </h1>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Username</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-400 transition">
            <User className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-400 transition">
            <Lock className="text-gray-400 mr-2" size={20} />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-[1.02]"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
