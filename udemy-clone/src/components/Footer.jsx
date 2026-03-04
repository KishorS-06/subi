import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__skills">
        <h4>Explore top skills and certifications</h4>
        <div className="footer__skills-grid">
          <div>
            <h5>In-demand Careers</h5>
            <ul>
              <li>Data Scientist</li>
              <li>Full Stack Web Developer</li>
              <li>Cloud Engineer</li>
              <li>Project Manager</li>
              <li>Game Developer</li>
              <li>All Career Accelerators</li>
            </ul>
          </div>
          <div>
            <h5>Web Development</h5>
            <ul>
              <li>Web Development</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Angular</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <h5>IT Certifications</h5>
            <ul>
              <li>Amazon AWS</li>
              <li>AWS Certified Cloud Practitioner</li>
              <li>AZ-900 Azure</li>
              <li>AWS Solutions Architect</li>
              <li>Kubernetes</li>
            </ul>
          </div>
          <div>
            <h5>Leadership</h5>
            <ul>
              <li>Leadership</li>
              <li>Management Skills</li>
              <li>Project Management</li>
              <li>Personal Productivity</li>
              <li>Emotional Intelligence</li>
            </ul>
          </div>
          <div>
            <h5>Certifications by Skill</h5>
            <ul>
              <li>Cybersecurity Certification</li>
              <li>Project Management Certification</li>
              <li>Cloud Certification</li>
              <li>Data Analytics Certification</li>
              <li>HR Management Certification</li>
              <li>See all Certifications</li>
            </ul>
          </div>
          <div>
            <h5>Data Science</h5>
            <ul>
              <li>Data Science</li>
              <li>Python</li>
              <li>Machine Learning</li>
              <li>ChatGPT</li>
              <li>Deep Learning</li>
            </ul>
          </div>
          <div>
            <h5>Communication</h5>
            <ul>
              <li>Communication Skills</li>
              <li>Presentation Skills</li>
              <li>Public Speaking</li>
              <li>Writing</li>
              <li>PowerPoint</li>
            </ul>
          </div>
          <div>
            <h5>Business Analytics & Intelligence</h5>
            <ul>
              <li>Microsoft Excel</li>
              <li>SQL</li>
              <li>Power BI</li>
              <li>Data Analysis</li>
              <li>Business Analysis</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__main-links">
        <div>
          <h5>About</h5>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Blog</li>
            <li>Investors</li>
          </ul>
        </div>
        <div>
          <h5>Discover Udemy</h5>
          <ul>
            <li>Get the app</li>
            <li>Teach on Udemy</li>
            <li>Plans and Pricing</li>
            <li>Affiliate</li>
            <li>Help and Support</li>
          </ul>
        </div>
        <div>
          <h5>Udemy for Business</h5>
          <ul>
            <li>Udemy Business</li>
          </ul>
        </div>
        <div>
          <h5>Legal & Accessibility</h5>
          <ul>
            <li>Accessibility statement</li>
            <li>Privacy policy</li>
            <li>Sitemap</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy Logo" className="footer__logo" />
          <span>© {new Date().getFullYear()} Udemy, Inc.</span>
        </div>
        <div className="footer__settings">Cookie settings</div>
        <div className="footer__lang">🌐 English</div>
      </div>
    </footer>
  );
}

export default Footer;
