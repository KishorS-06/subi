import React, { useState } from "react";
import "./ExploreMenu.css";

const goals = [
  { label: "Learn AI" },
  { label: "Launch a new career" },
  { label: "Prepare for a certification" },
  { label: "Practice with Role Play" },
];

const categories = [
  "Development", "Business", "Finance & Accounting", "IT & Software",
  "Office Productivity", "Personal Development", "Design", "Marketing",
  "Lifestyle", "Photography & Video", "Health & Fitness"
];

const inDemandCareers = [
  "Cloud Engineer", "Data Scientist", "Digital Marketer", "Full Stack Web Developer",
  "Game Developer", "Project Manager", "Machine Learning Engineer",
  "Cybersecurity Analyst", "Data Engineer", "AI Engineer", "Software Engineer",
  "Financial Analyst", "UX Designer", "All Career Accelerators"
];

function ExploreMenu({ open, onClose }) {
  // For a full app: you’d show or hide this with 'open' state and animate
  return (
    <div className={`explore-menu${open ? " open" : ""}`}>
      <div className="explore-sidebar">
        <div className="explore-section">
          <h4>Explore by Goal</h4>
          <ul>
            {goals.map((g) => (
              <li key={g.label} tabIndex="0">{g.label}</li>
            ))}
          </ul>
        </div>
        <div className="explore-section">
          <ul>
            {categories.map((cat) => (
              <li key={cat} tabIndex="0">{cat}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="explore-mega">
        <h4>In-demand Careers</h4>
        <ul>
          {inDemandCareers.map((career) => (
            <li key={career}>{career}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExploreMenu;
