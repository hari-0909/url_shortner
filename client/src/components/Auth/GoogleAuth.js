import { signInWithPopup, auth, provider } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

export default function GoogleAuth({ onClose }) {
  const { setUser } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { email } = result.user;
      localStorage.setItem("token", "google_auth"); // temp token, since we skip backend for now
      setUser({ email });
      onClose();
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  return (
    <button className="google-signin-btn" onClick={handleGoogleLogin}>
      <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="google-logo" />
      Continue with Google
    </button>
  );
}