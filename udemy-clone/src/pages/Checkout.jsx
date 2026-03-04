import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const methods = [
    { key: "upi", label: "UPI (Google Pay / PhonePe / Paytm)" },
    { key: "card", label: "Credit / Debit Card" },
    { key: "netbanking", label: "Net Banking" },
    { key: "paypal", label: "PayPal" },
  ];

  function handlePay(methodKey) {
    setSelected(methodKey);
    setMessage(
      "Payment simulated successfully. This is a demo checkout — no real charge was made."
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-box">
        <h1 className="checkout-title">Checkout</h1>
        <p className="checkout-sub">Select a payment method to complete your purchase.</p>

        <div className="payment-methods">
          {methods.map((m) => (
            <button
              key={m.key}
              className={`payment-option ${selected === m.key ? "active" : ""}`}
              onClick={() => handlePay(m.key)}
            >
              {m.label}
            </button>
          ))}
        </div>

        {message && <div className="payment-message">{message}</div>}

        <div className="checkout-actions">
          <button className="btn-secondary" onClick={() => navigate("/cart")}>
            Back to Cart
          </button>
          <button className="btn-primary" onClick={() => navigate("/courses")}>
            Keep Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;



