import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <img
              src="/images/logo.png"
              alt="Chhotu Ram College of Education"
            />
          </a>

          <p className="footer-tagline">
            Shaping educators.
            <br />
            Inspiring generations.
          </p>

          <span className="footer-established">
            EST. 1951 · ROHTAK
          </span>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>

          <a href="/about-us">About Us</a>
          <a href="/academics">Academics</a>
          <a href="/admission-procedure">Admissions</a>
          <a href="/gallery">Gallery</a>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="/iqac">IQAC</a>
          <a href="/downloads">Downloads</a>
          <a href="/ncte-documents">Mandatory Documents</a>
          <a href="/student-support-services">
            Student Support
          </a>
        </div>

        <div className="footer-contact">
          <h3>Visit Us</h3>

          <p>
            Delhi Road, Rohtak,
            <br />
            Haryana - 124001
          </p>

          <a
            href="tel:+919315855909"
            className="footer-phone"
          >
            +91 93158 55909
          </a>

          <a
            href="/location-map"
            className="footer-location"
          >
            <span>View Location</span>
            <strong>↗</strong>
          </a>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Chhotu Ram College of Education
        </p>

        <span className="footer-divider">•</span>

        <p>
          Affiliated to M.D. University, Rohtak
        </p>

        <a href="#top" className="back-top">
          Back to top
          <strong>↑</strong>
        </a>

      </div>

    </footer>
  );
}