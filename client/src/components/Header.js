import { useState } from "react";
import AuthModal from "./Auth/AuthModal";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <header className="header">
      <div className="logo">Shortly</div>
      <div className="auth-buttons">
        {!user ? (
          <button onClick={() => setShowModal(true)}>Login / Sign Up</button>
        ) : (
          <>
            <p>Welcome, {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </header>
  );
}