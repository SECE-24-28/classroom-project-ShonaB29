import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>SmartPay</h2>
      <div>
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
