
import { useState } from "react";
import { Lock, User } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

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
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-300 via-blue-200 to-cyan-200 px-4 overflow-hidden">
      {/* ✅ 3D BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />

          {/* Floating Torus Knot */}
          <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <mesh position={[-1.5, 0, 0]}>
              <torusKnotGeometry args={[0.7, 0.25, 100, 16]} />
              <meshStandardMaterial color="royalblue" metalness={0.6} roughness={0.3} />
            </mesh>
          </Float>

          {/* Floating Sphere */}
          <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
            <mesh position={[2, 1, -1]}>
              <sphereGeometry args={[0.6, 32, 32]} />
              <meshStandardMaterial color="cyan" metalness={0.5} roughness={0.4} />
            </mesh>
          </Float>

          {/* Floating Cube */}
          <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <mesh position={[0, -1.5, -1]}>
              <boxGeometry args={[0.8, 0.8, 0.8]} />
              <meshStandardMaterial color="indigo" metalness={0.4} roughness={0.6} />
            </mesh>
          </Float>

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* ✅ LOGIN FORM */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 /90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md transition hover:shadow-2xl"
      >
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          Login
        </h1>

        <div className="mb-6">
          <label className="block text-gray-200 font-medium mb-2">Username</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-400 transition">
            <User className="text-gray-300 mr-2" size={20} />
            <input
            
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-white bg-transparent focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-200 font-medium mb-2">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-400 transition">
            <Lock className="text-gray-200 mr-2" size={20} />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-gray-200 bg-transparent focus:outline-none"
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
// import { useState } from "react";
// import { Lock, User } from "lucide-react";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const response = await fetch("auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       alert("Login successful!");
//       localStorage.setItem("loggedIn", "true");
//       window.location.href = "/";
//     } else {
//       alert("Invalid username or password");
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-white px-4 overflow-hidden">
      
//       {/* ✅ Monument Skyline (Static, Professional) */}
//       <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-0 border-t border-gray-200 bg-gray-50">
//         <div className="flex w-full space-x-6 py-4">
//           <img src="/public/monument2.png" alt="Taj Mahal" className="h-70% w-100%  object-contain" />
          
//         </div>
//       </div>

//       {/* ✅ Login Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="relative z-10 bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-200"
//       >
//         <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700">
//           Login
//         </h1>

//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">Username</label>
//           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-400 transition">
//             <User className="text-gray-400 mr-2" size={20} />
//             <input
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full bg-transparent focus:outline-none"
//               required
//             />
//           </div>
//         </div>

//         <div className="mb-8">
//           <label className="block text-gray-700 font-medium mb-2">Password</label>
//           <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-400 transition">
//             <Lock className="text-gray-400 mr-2" size={20} />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full bg-transparent focus:outline-none"
//               required
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-[1.02]"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;
