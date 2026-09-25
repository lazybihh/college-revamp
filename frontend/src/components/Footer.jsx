import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="Chhotu Ram College of Education"
            />
          </a>

          <p>
            Shaping educators. Inspiring generations.
          </p>
        </div>


        <div className="footer-links">

          <h3>Explore</h3>

          <a href="/about-us">About Us</a>
          <a href="/academics">Academics</a>
          <a href="/admission-procedure">Admissions</a>
          <a href="/gallery">Gallery</a>

        </div>


        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/iqac">IQAC</a>
          <a href="/downloads">Downloads</a>
          <a href="/ncte-documents">Mandatory Documents</a>
          <a href="/student-support-services">Student Support</a>

        </div>


        <div className="footer-contact">

          <h3>Contact</h3>

          <p>
            Delhi Road, Rohtak,<br />
            Haryana - 124001
          </p>

          <a href="tel:+919315855909">
            +91 93158 55909
          </a>

          <a href="/location-map">
            View Location →
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 Chhotu Ram College of Education
        </span>

        <span>
          All rights reserved
        </span>

        <a href="#top">
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}