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

        <div className="footer-right">

          <div className="footer-socials">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle className="footer-social-dot" cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.8H7.5V13h2.8v8z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2.5" y="5" width="19" height="14" rx="4" />
                <path className="footer-youtube-play" d="m10 8.5 6 3.5-6 3.5z" />
              </svg>
            </a>

          </div>

          <a href="#top" className="back-top">
            Back to top
            <strong>↑</strong>
          </a>

        </div>

      </div>

    </footer>
  );
}