import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import GoogleAuth from "./GoogleAuth";

export default function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <GoogleAuth onClose={onClose}/>
        {isLogin ? <LoginForm onClose={onClose} /> : <SignupForm onClose={onClose} />}
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
        <button onClick={onClose} className="close">X</button>
      </div>
    </div>
  );
}