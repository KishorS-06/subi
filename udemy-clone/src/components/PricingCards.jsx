import './PricingCards.css';

function PricingCards() {
  return (
    <section className="pricing">
      <div className="pricing__grid">
        <div className="pricing__card pricing__card--team">
          <h3>Team Plan</h3>
          <p>₹2,000 a month per user</p>
          <ul>
            <li>Access to 13,000+ top courses</li>
            <li>Certification prep</li>
            <li>AI-powered coaching</li>
          </ul>
          <button className="btn btn--purple">Start subscription</button>
        </div>
        <div className="pricing__card pricing__card--enterprise">
          <h3>Enterprise Plan</h3>
          <ul>
            <li>Access to 30,000+ top courses</li>
            <li>Customizable content</li>
            <li>Hands-on tech training</li>
          </ul>
          <button className="btn btn--outline">Request a demo</button>
        </div>
        <div className="pricing__card pricing__card--ai">
          <h3>AI Fluency</h3>
          <ul>
            <li>Org-wide AI fluency</li>
            <li>50 curated courses</li>
          </ul>
          <button className="btn btn--outline">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
export default PricingCards;
