import React from "react";
import "./PlaningandPricing.css";
import { FaCheckCircle, FaPlusCircle, FaUser, FaUsers } from "react-icons/fa";

const plans = [
  {
    title: "Personal Plan",
    subtitle: "Starting at ₹500 per month",
    details: "Individual",
    icon: <FaUser />,
    button: { label: "Start subscription", variant: "primary" },
    features: ["Access to 26,000+ top courses", "Certification prep", "Goal-focused recommendations", "AI-powered coding exercises"],
    planType: "personal",
    topColor: "#9626ea"
  },
  {
    title: "Team Plan",
    subtitle: "₹2,000 a month per user",
    details: "2 to 50 people",
    icon: <FaUsers />,
    button: { label: "Start subscription", variant: "primary" },
    features: ["Access to 13,000+ top courses", "Certification prep", "Goal-focused recommendations", "AI-powered coding exercises", "Analytics and adoption reports"],
    planType: "team",
    topColor: "#7300c2"
  },
  {
    title: "Enterprise Plan",
    subtitle: "Contact sales for pricing",
    details: "More than 20 people",
    icon: <FaUsers />,
    button: { label: "Request a demo", variant: "secondary" },
    features: ["Access to 30,000+ top courses", "Certification prep", "Goal-focused recommendations", "AI-powered coding exercises", "Advanced analytics and insights", "Customizable content", "Strategic implementation services"],
    planType: "enterprise",
    topColor: "#3e00a7"
  }
];

const compareFeatures = [
  { label: "Top-rated courses", personal: "26000+", team: "13000+", enterprise: "30,000+" },
  { label: "Certification prep courses and practice tests", personal: true, team: true, enterprise: true },
  { label: "AI-powered coding exercises", personal: true, team: true, enterprise: true },
  { label: "Goal-aligned recommendations", personal: true, team: true, enterprise: true },
  { label: "Instructor Q&A", personal: false, team: false, enterprise: false },
  { label: "Skills assessments", personal: "addon", team: "addon", enterprise: true },
  { label: "Labs and technical workspaces", personal: "addon", team: true, enterprise: true },
  { label: "Pre-built paths", personal: "addon", team: "addon", enterprise: true },
  { label: "Advanced insights", personal: false, team: "addon", enterprise: true }
];

function getFeatureIcon(val) {
  if (val === true) return <FaCheckCircle className="table-icon included" />;
  if (val === "addon") return <FaPlusCircle className="table-icon addon" />;
  return null;
}

function PlansAndPricing() {
  return (
    <div className="plans-page">
      <h1 className="plans-page__title">Choose a plan for success</h1>
      <p className="plans-page__subtitle">
        Don&apos;t want to buy courses one by one? Pick a plan to help you, your team, or your organization achieve outcomes faster.
      </p>

      <div className="plans-grid">
        {plans.map(plan => (
          <div className="plan-card" key={plan.title} style={{ borderTop: `6px solid ${plan.topColor}` }}>
            <div className="plan-card__header">
              <div className="plan-card__title">{plan.title}</div>
              <div className="plan-card__details">
                <span className="plan-card__price">{plan.subtitle}</span>
                <span className="plan-card__icon">{plan.icon}</span>
                <span className="plan-card__desc">{plan.details}</span>
              </div>
            </div>
            <button className={`plan-card__btn ${plan.button.variant === "primary" ? "primary" : "secondary"}`}>
              {plan.button.label} <span>&rarr;</span>
            </button>
            <ul className="plan-card__features">
              {plan.features.map(feature => (
                <li key={feature}>
                  <FaCheckCircle className="included" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="plans-comparison">
        <h2 className="comparison-title">Compare plans and features</h2>
        <div className="comparison-legend">
          <span><FaCheckCircle className="included" /> Included in plan</span>
          <span><FaPlusCircle className="addon" /> Available with add-on</span>
        </div>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th style={{ width: 320 }}>Learner experience</th>
                <th>Personal Plan</th>
                <th>Team Plan</th>
                <th>Enterprise Plan</th>
              </tr>
            </thead>
            <tbody>
              {compareFeatures.map(row => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{typeof row.personal === "string" ? row.personal : getFeatureIcon(row.personal)}</td>
                  <td>{typeof row.team === "string" ? row.team : getFeatureIcon(row.team)}</td>
                  <td>{typeof row.enterprise === "string" ? row.enterprise : getFeatureIcon(row.enterprise)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default PlansAndPricing;
