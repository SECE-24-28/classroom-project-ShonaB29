import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

export default function Home() {
  const navigate = useNavigate();

  const [number, setNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = {
    airtel: Array.from({ length: 20 }, (_, i) => ({
      price: 100 + i * 10,
      validity: "28 Days",
      desc: "Unlimited Calls + 1GB/day",
    })),
    jio: Array.from({ length: 20 }, (_, i) => ({
      price: 120 + i * 10,
      validity: "28 Days",
      desc: "Unlimited + 1.5GB/day",
    })),
    bsnl: Array.from({ length: 20 }, (_, i) => ({
      price: 90 + i * 10,
      validity: "28 Days",
      desc: "Unlimited + 2GB/day",
    })),
    vi: Array.from({ length: 20 }, (_, i) => ({
      price: 110 + i * 10,
      validity: "30 Days",
      desc: "Unlimited + 1GB/day",
    })),
  };

  return (
    <div className="container">
      <h2>Mobile Recharge</h2>

      <input
        type="number"
        placeholder="Enter Mobile Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="">Select Operator</option>
        <option value="airtel">Airtel</option>
        <option value="jio">Jio</option>
        <option value="bsnl">BSNL</option>
        <option value="vi">Vi</option>
      </select>

      {/* Show plans only after operator selected */}
      {operator && (
        <div>
          <h3>Available Plans</h3>

          {plans[operator].map((p, i) => (
            <div
              key={i}
              className={`plan-card ${
                selectedPlan?.price === p.price ? "selected-plan" : ""
              }`}
              onClick={() => setSelectedPlan(p)}
            >
              <div className="plan-price">₹{p.price}</div>
              <div className="plan-validity">{p.validity}</div>
              <div className="plan-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      )}

      {/* Recharge Button only after selecting plan */}
      {selectedPlan && (
        <button className="btn recharge-btn" onClick={() => navigate("/success")}>
          Recharge Now
        </button>
      )}
    </div>
  );
}
