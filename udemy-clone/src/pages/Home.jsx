import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { courses } from "../data/courses";

const categories = [
  "Development", "Business", "Finance & Accounting", "IT & Software",
  "Office Productivity", "Personal Development", "Design"
];

function Home({ user }) {
  return (
    <div className="home-main-content">
      <div className="categories-bar">
        {categories.map((cat) => (
          <div className="category-link" key={cat}>{cat}</div>
        ))}
      </div>

      <div className="home-header">
        <div className="home-avatar">{user?.initials || "U"}</div>
        <div>
          <h2>Welcome, {user?.name || "User"}</h2>
          <a href="#" className="home-add-link">Add occupation and interests</a>
        </div>
      </div>
      
      <div className="home-banner-carousel">
        <div className="banner-slide">
          <div className="banner-content">
            <h1>Build your learning routine</h1>
            <p>
              Learning 15 minutes a day can pay off in your career. Get started with courses from ₹519 until Nov 5.
            </p>
          </div>
          <div className="banner-img-right">
            <img src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/29c93b05-0a5a-4088-ad8e-86ac291ad38a.png" alt="Carousel Img" />
          </div>
          <button className="banner-arrow left" aria-label="Previous">&#8592;</button>
          <button className="banner-arrow right" aria-label="Next">&#8594;</button>
        </div>
      </div>

      {/* Trending + Top courses sections */}
      <div className="learn-next-section">
        <h1 className="learn-next-title">What to learn next</h1>
        <h2 className="section-label">All courses (sorted by price)</h2>
        <div className="trending-row">
          {courses
            .slice()
            .sort((a, b) => {
              const pa = Number(a.price.replace(/[^0-9]/g, ""));
              const pb = Number(b.price.replace(/[^0-9]/g, ""));
              return pa - pb;
            })
            .map((c) => (
              <Link to={`/courses/${c.id}`} key={c.id} className="trending-card" style={{ textDecoration: "none", color: "inherit" }}>
                <img className="trending-img" src={c.imgUrl} alt={c.title} />
                <div className="trending-title">{c.title}</div>
                <div className="trending-instructor">{c.instructor}</div>
                <div className="trending-meta">
                  <span className="star">★ {c.rating.toFixed(1)}</span>
                  <span className="count">({c.ratingsCount})</span>
                </div>
                <div className="trending-price">
                  <span className="current">{c.price}</span>
                  <span className="old">{c.oldPrice}</span>
                </div>
                <div>
                  <span className="badge" style={{ background: c.badgeColor + "20", color: c.badgeColor }}>{c.badge}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Team Banner (fixed at bottom or after sections) */}
      <div className="home-business-banner">
        <span><b>Training 2 or more people?</b> Get your team access to Udemy's top 30,000+ courses</span>
        <button className="business-btn">Get Udemy Business</button>
        <button className="dismiss-btn">Dismiss</button>
      </div>
    </div>
  );
}
export default Home;
