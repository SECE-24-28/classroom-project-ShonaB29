import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style.css";

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { number, operator, plan } = state || {};

  const handlePay = () => {
    navigate("/success", {
      state: { number, operator, plan },
    });
  };

  return (
    <div className="auth-container">
      <h2>Payment</h2>

      <div className="payment-box">
        <p><strong>Mobile:</strong> {number}</p>
        <p><strong>Operator:</strong> {operator}</p>
        <p><strong>Plan:</strong> {plan.price}</p>
        <p><strong>Data:</strong> {plan.data}</p>
        <p><strong>Validity:</strong> {plan.validity}</p>
      </div>

      <button onClick={handlePay}>Pay Now</button>
    </div>
  );
}
