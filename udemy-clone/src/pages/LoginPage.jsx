import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { api } from "../lib/api";

function LoginPage({ setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    if (setUser) setUser(null);
    navigate("/");
  };
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      const data = await api.login(form);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-illustration">
        <img
          src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp"
          alt="Login Illustration"
        />
      </div>
      <div className="login-form-section">
        {localStorage.getItem("token") && (
          <div className="auth-top-action">
            <button type="button" className="logout-inline-btn" onClick={handleLogout}>Log out</button>
          </div>
        )}
        <h1 className="login-title">Log in to continue your learning journey</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="login-input"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-btn">Continue</button>
          {error && <div className="login-error">{error}</div>}
        </form>
        <div className="login-divider">
          <span>Other log in options</span>
        </div>
        <div className="login-socials">
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
        <div className="login-linkboxes">
          <div className="login-linkbox">
            Don’t have an account? <a href="/signup">Sign up</a>
          </div>
          <div className="login-linkbox">
            <a href="/orglogin">Log in with your organization</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
