import { useState } from "react";
import axios from "../../utils/axiosInstance";
import { useAuth } from "../../contexts/AuthContext";

export default function SignupForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/signup", { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      onClose();
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}