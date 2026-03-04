import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { api } from "../lib/api";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCart() {
      try {
        const data = await api.getCart();
        setCartItems(data.cart || []);
      } catch (err) {
        setError(err.message);
      }
    }
    loadCart();
  }, []);

  async function handleRemove(courseId) {
    try {
      const data = await api.removeFromCart(courseId);
      setCartItems(data.cart || []);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <span className="cart-count">{cartItems.length} Courses in Cart</span>
      <div className="cart-box">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <img
              src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg"
              alt="empty cart"
              className="cart-empty-img"
            />
            <div className="cart-empty-text">
              Your cart is empty. Keep shopping to find a course!
            </div>
            <button
              className="cart-continue-btn"
              onClick={() => navigate("/courses")}
            >
              Keep shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-item-list">
              {cartItems.map(item => (
                <li key={item.courseId} className="cart-item">
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                  <button
                    className="cart-remove-btn"
                    onClick={() => handleRemove(item.courseId)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-actions">
              <button className="cart-checkout-btn" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
              <button className="cart-continue-btn" onClick={() => navigate('/courses')}>Add more courses</button>
            </div>
          </>
        )}
      </div>
      {error && <div className="cart-error">{error}</div>}
    </div>
  );
}

export default Cart;