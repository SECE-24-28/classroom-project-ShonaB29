import React, { useState } from "react";
import "../style.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="center-box">
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Create Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button className="btn">Create Account</button>
    </div>
  );
}
