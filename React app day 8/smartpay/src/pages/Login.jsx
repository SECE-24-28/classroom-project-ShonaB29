import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (email.trim() !== "" && pass.trim() !== "") {
      navigate("/home");
    }
  };

  return (
    <div className="center-box">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button className="btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
