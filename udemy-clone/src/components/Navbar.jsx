import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';
import ExploreMenu from '../pages/ExploreMenu'; // Adjust to your project
import './Navebar.css';

function Navbar() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target)
      ) {
        setExploreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__logo-link">
          <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" className="navbar__logo-img" />
        </Link>
      </div>

      <div
        ref={exploreRef}
        className="navbar__explore"
        style={{ position: "relative" }}
      >
        <button
          className="navbar__explore-btn"
          type="button"
          onClick={() => setExploreOpen((open) => !open)}
          aria-haspopup="true"
          aria-expanded={exploreOpen}
        >
          Explore
        </button>
        {exploreOpen && (
          <div style={{ position: "absolute", top: "100%", left: 0, zIndex: 99 }}>
            <ExploreMenu open={exploreOpen} />
          </div>
        )}
      </div>

      <div className="navbar__search">
        <input
          type="text"
          className="navbar__search-input"
          placeholder="Search for anything"
        />
      </div>
      <div className="navbar__links">
        <Link to="/plans" className="navbar__link">Plans & Pricing</Link>
        <Link to="/business" className="navbar__link">Udemy Business</Link>
        <Link to="/teach" className="navbar__link">Teach on Udemy</Link>
        <Link to="/cart" className="navbar__cart" aria-label="Cart">
          <FiShoppingCart size={22} />
        </Link>
        <Link to="/login" className="navbar__btn navbar__btn-outline">Log in</Link>
        <Link to="/signup" className="navbar__btn navbar__btn-purple">Sign up</Link>
        <button className="navbar__btn navbar__btn-outline navbar__btn-lang" aria-label="Language">
          <span role="img" aria-label="globe">🌐</span>
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
