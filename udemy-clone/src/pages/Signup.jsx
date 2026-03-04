import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { api } from "../lib/api";

function SignUpPage({ setUser }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await api.register(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (setUser) setUser(null);
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-illustration">
        <img
          src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp"
          alt="Sign up illustration"
        />
      </div>
      <div className="signup-form-section">
        {localStorage.getItem("token") && (
          <div className="auth-top-action">
            <button type="button" className="logout-inline-btn" onClick={handleLogout}>Log out</button>
          </div>
        )}
        <h1 className="signup-title">Sign up with email</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            className="signup-input"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="signup-input"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signup-input"
            onChange={handleChange}
            required
          />
          <label className="signup-checkbox-label">
            <input type="checkbox" className="signup-checkbox" defaultChecked />
            <span>
              Send me special offers, personalized recommendations, and learning tips.
            </span>
          </label>
          <button type="submit" className="signup-btn">Continue</button>
          {error && <div className="signup-error">{error}</div>}
        </form>
        <div className="signup-divider">
          <span>Other sign up options</span>
        </div>
        <div className="signup-socials">
          <button className="social-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
          </button>
          <button className="social-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" />
          </button>
          <button className="social-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          </button>
        </div>
        <div className="signup-terms">
          By signing up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </div>
        <div className="signup-linkbox">
          Already have an account? <a href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
