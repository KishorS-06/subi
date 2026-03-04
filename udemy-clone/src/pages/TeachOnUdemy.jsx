import './TeachOnUdemy.css';
import heroImage from "../assets/image.png"; // Adjust the path if necessary

function TeachOnUdemy() {
  return (
    <div className="teach-container">
      {/* Hero */}
      <section className="teach-hero">
        <div className="teach-hero-text">
          <h1>Come teach<br />with us</h1>
          <p>
            Become an instructor and change lives<br />
            — including your own
          </p>
          <button className="btn teach-cta">Get started</button>
        </div>
        <img className="teach-hero-img"
          src={heroImage}
          alt="Instructor" />
      </section>
      
      {/* Feature Row */}
      <section className="teach-features">
        <h2>So many reasons to start</h2>
        <div className="teach-features-row">
          <div>
            <img src="https://s.udemycdn.com/teaching/value-prop-teach-2x-v3.jpg" alt="" />
            <h3>Teach your way</h3>
            <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
          </div>
          <div>
            <img src="https://s.udemycdn.com/teaching/value-prop-inspire-2x-v3.jpg" alt="" />
            <h3>Inspire learners</h3>
            <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
          </div>
          <div>
            <img src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg" alt="" />
            <h3>Get rewarded</h3>
            <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
          </div>
        </div>
        {/* Stats Bar */}
        <div className="teach-stats-bar">
          <div><span>80M</span>Students</div>
          <div><span>75+</span>Languages</div>
          <div><span>1.1B</span>Enrollments</div>
          <div><span>180+</span>Countries</div>
          <div><span>17,200+</span>Enterprise customers</div>
        </div>
      </section>

      {/* Guide Tabs */}
      <section className="teach-guide">
        <h2>How to begin</h2>
        <div className="teach-tabs">
          <button>Plan your curriculum</button>
          <button>Record your video</button>
          <button>Launch your course</button>
        </div>
        <div className="teach-guide-content">
          <div className="teach-guide-text">
            <p>
              You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.<br/>
              The way that you teach — what you bring to it — is up to you.<br/><br/>
              <b>How we help you</b>
              <br />
              We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.
            </p>
          </div>
          <img src="https://s.udemycdn.com/teaching/plan-your-curriculum-2x-v3.jpg" alt="" />
        </div>
      </section>

      {/* Large CTA */}
      <section className="teach-large-cta">
        <h2>Become an instructor today</h2>
        <p>Join one of the world’s largest online learning marketplaces.</p>
        <button className="btn teach-cta-lg">Get started</button>
      </section>

      {/* Testimonial (Carousel Placeholder) */}
      <section className="teach-testimonial">
        <div className="teach-testimonial-img">
          <img src="https://s.udemycdn.com/teaching/instructors/en/frank-2x-v2.jpg" alt="Instructor testimonial" />
        </div>
        <div className="teach-testimonial-text">
          <blockquote>
            “I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”
          </blockquote>
          <div className="teach-testimonial-author">
            <b>Frank Kane</b><br />
            <span>Data Science & IT Certifications</span>
          </div>
        </div>
      </section>

      {/* Support/FAQ */}
      <section className="teach-support">
        <img src="https://www.udemy.com/staticx/udemy/images/v7/icon-support-instructors-v2.svg" className="support-left" alt="" />
        <div className="teach-support-center">
          <h2>You won’t have to do it alone</h2>
          <p>
            Our <b>Instructor Support Team</b> is here to answer your questions and review your test video, while our <b>Teaching Center</b> gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our <b>online community</b>.
          </p>
          <a href="#" className="teach-support-link">Need more details before you start? Learn more.</a>
        </div>
        <img src="https://www.udemy.com/staticx/udemy/images/v7/icon-community-instructors-v2.svg" className="support-right" alt="" />
      </section>
    </div>
  );
}

export default TeachOnUdemy;
