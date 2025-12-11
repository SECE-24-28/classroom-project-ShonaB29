import React, { useState } from "react";

const plans = [
  { price: "₹199", data: "1.5GB/day", validity: "28 days" },
  { price: "₹239", data: "1.5GB/day", validity: "84 days" },
  { price: "₹299", data: "2GB/day", validity: "28 days" },
  { price: "₹399", data: "2.5GB/day", validity: "56 days" },
  { price: "₹499", data: "3GB/day", validity: "56 days" },
  { price: "₹599", data: "3GB/day", validity: "84 days" },
  { price: "₹699", data: "2GB/day", validity: "90 days" },
  { price: "₹799", data: "3GB/day", validity: "90 days" },
  { price: "₹999", data: "Unlimited", validity: "84 days" },
  { price: "₹1499", data: "Unlimited", validity: "180 days" },
];

export default function RechargePlan() {
  const [operator, setOperator] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="recharge-container">
      <h2>Mobile Recharge</h2>

      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="">Select Operator</option>
        <option>Airtel</option>
        <option>Jio</option>
        <option>BSNL</option>
        <option>VI</option>
      </select>

      <div className="plan-list">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3>{plan.price}</h3>
            <p>Data: {plan.data}</p>
            <p>Validity: {plan.validity}</p>
            <button>Recharge Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
