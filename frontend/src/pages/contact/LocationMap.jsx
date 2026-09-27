import InnerPage from "../../components/InnerPage";

const sidebarLinks = [
  { label: "Contact Us", href: "/contact-us" },
  { label: "Location Map", href: "/location-map" },
];

export default function LocationMap() {
  return (
    <InnerPage
      eyebrow="FIND US"
      title="Location Map"
      description="Find Chhotu Ram College of Education, Delhi Road, Rohtak."
      breadcrumb={["Location Map"]}
      sidebarTitle="Contact"
      sidebarLinks={sidebarLinks}
      activeLink="Location Map"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="content-intro">
        <span className="section-kicker">OUR LOCATION</span>
        <h2>Chhotu Ram College of Education</h2>
        <p>
          Delhi Road, Rohtak, Haryana, India
        </p>
      </div>

      <div className="map-section">
        <div className="map-placeholder">
          <div className="map-pin">●</div>

          <div className="map-placeholder-content">
            <span>CRCOE</span>
            <h3>Delhi Road, Rohtak</h3>
            <p>Haryana, India</p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Chhotu+Ram+College+of+Education+Rohtak"
              target="_blank"
              rel="noreferrer"
              className="content-button"
            >
              OPEN IN GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </InnerPage>
  );
}