import InnerPage from "../../components/InnerPage";

const sidebarLinks = [
  { label: "Contact Us", href: "/contact-us" },
  { label: "Location Map", href: "/location-map" },
];

export default function Contact() {
  return (
    <InnerPage
      eyebrow="GET IN TOUCH"
      title="Contact Us"
      description="Connect with Chhotu Ram College of Education, Rohtak."
      breadcrumb={["Contact Us"]}
      sidebarTitle="Contact"
      sidebarLinks={sidebarLinks}
      activeLink="Contact Us"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="content-intro">
        <span className="section-kicker">COLLEGE ADDRESS</span>
        <h2>Chhotu Ram College of Education</h2>
        <p>
          Get in touch with the college through the official contact
          information provided below.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <span className="contact-card-number">01</span>
          <span className="section-kicker">VISIT US</span>
          <h3>College Address</h3>
          <p>
            Delhi Road,
            <br />
            Rohtak,
            <br />
            Haryana, India
          </p>
        </div>

        <div className="contact-card">
          <span className="contact-card-number">02</span>
          <span className="section-kicker">CALL US</span>
          <h3>Phone</h3>
          <a href="tel:+919053314403">
            +91-90533-14403
          </a>
        </div>

        <div className="contact-card contact-card-wide">
          <span className="contact-card-number">03</span>
          <span className="section-kicker">EMAIL US</span>
          <h3>Email</h3>

          <a href="mailto:info@crcoertk.org">
            info@crcoertk.org
          </a>

          <a href="mailto:crcoe2008@yahho.com">
            crcoe2008@yahho.com
          </a>
        </div>
      </div>

      <div className="highlight-box">
        <span className="highlight-number">04</span>

        <div>
          <h3>Official Website</h3>
          <p>
            Visit the college website for institutional information,
            academic resources and other updates.
          </p>

          <a
            className="content-button"
            href="https://crcoertk.org"
            target="_blank"
            rel="noreferrer"
          >
            VISIT WEBSITE
          </a>
        </div>
      </div>
    </InnerPage>
  );
}