import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import LoginPage from "./pages/LoginPage"; 
import SignupPage from "./pages/Signup";
import PlaningandPricing from "./pages/PlaningandPricing";
import Footer from "./components/Footer";
import TeachOnUdemy from "./pages/TeachOnUdemy";
import ExploreMenu from "./pages/ExploreMenu";
import "./App.css";
import { api } from "./lib/api";
import Checkout from "./pages/Checkout";

function PrivateRoute({ children, user, isAuthChecking }) {
  if (isAuthChecking) return null; // or a small loader
  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  const [user, setUser] = useState(null);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  // Auto-login on refresh if token exists:
  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const data = await api.me();
        setUser(data.user);
      } catch (_) {
        // invalid/expired token: clear it silently
        localStorage.removeItem("token");
      } finally {
        setIsAuthChecking(false);
      }
    }
    fetchUser();
    // If there is no token at all, stop checking immediately
    if (!localStorage.getItem("token")) {
      setIsAuthChecking(false);
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<SignupPage setUser={setUser} />} />
        <Route path="/" element={<Home user={user} />}/>
        <Route path="/courses" element={
          <PrivateRoute user={user} isAuthChecking={isAuthChecking}><Courses /></PrivateRoute>
        }/>
        <Route path="/courses/:id" element={
          <PrivateRoute user={user} isAuthChecking={isAuthChecking}><CourseDetails /></PrivateRoute>
        }/>
        <Route path="/cart" element={
          <PrivateRoute user={user} isAuthChecking={isAuthChecking}><Cart user={user} /></PrivateRoute>
        }/>
        <Route path="/checkout" element={
          <PrivateRoute user={user} isAuthChecking={isAuthChecking}><Checkout /></PrivateRoute>
        }/>
        <Route path="/profile" element={
          <PrivateRoute user={user} isAuthChecking={isAuthChecking}><Profile user={user} /></PrivateRoute>
        }/>
        <Route path="/plans" element={<PlaningandPricing />} />
        <Route path="/teach" element={<TeachOnUdemy />} />
        <Route path="/explore" element={<ExploreMenu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
