import InnerPage from "../../components/InnerPage";

export default function ICTCenter() {
  return (
    <InnerPage
      eyebrow="CAMPUS FACILITIES"
      title="ICT Center"
      description="A technology-enabled learning environment supporting digital teaching, communication and academic work."
      breadcrumb={["Facilities", "ICT Center"]}
      sidebarTitle="Facilities"
      activeLink="ICT Center"
      heroImage="/images/ict-center.jpg"
      sidebarLinks={[
        { label: "Class Rooms", href: "/class-rooms" },
        { label: "ICT Center", href: "/ict-center" },
        { label: "Library Facility", href: "/library-facility" },
        { label: "Home Science Lab", href: "/home-science-lab" },
        { label: "Language Lab", href: "/language-lab" },
        { label: "Psychology Lab", href: "/psychology-lab" },
        {
          label: "Science & Mathematics Lab",
          href: "/science-and-mathematics-lab",
        },
        { label: "Sports Facilities", href: "/sports-facilities" },
        { label: "Women Cell", href: "/women-cell" },
        { label: "Other Facilities", href: "/other-facilities" },
      ]}
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">DIGITAL LEARNING</span>
        <h2>
          Technology that makes <em>learning connected.</em>
        </h2>
      </div>

      <div className="facility-feature facility-feature-reverse">
        <div className="facility-feature-image">
          <img
            src="/images/ict-center.jpg"
            alt="ICT Center at Chhotu Ram College of Education"
          />

          <div className="facility-image-label">
            <span>02</span>
            <strong>ICT CENTER</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">DIGITAL RESOURCES</span>

          <h3>
            A dedicated space for technology-supported education.
          </h3>

          <p>
            The ICT Center provides students and faculty with a range of
            digital and multimedia resources to support teaching, learning and
            academic activities.
          </p>

          <p>
            The facility includes multimedia computers with broadband
            connectivity, laptops, printing and scanning facilities, digital
            projection equipment and audio-visual resources.
          </p>

          <div className="facility-stat">
            <strong>20+</strong>
            <span>Multimedia computers with broadband facilities</span>
          </div>
        </div>
      </div>

      <div className="facility-grid">
        <div className="facility-mini-card">
          <span>01</span>
          <h3>Computer Resources</h3>
          <p>
            Multimedia computers and laptops provide students with access to
            digital learning resources.
          </p>
        </div>

        <div className="facility-mini-card">
          <span>02</span>
          <h3>Printing & Scanning</h3>
          <p>
            Printing, scanning and photocopying resources support academic and
            administrative work.
          </p>
        </div>

        <div className="facility-mini-card">
          <span>03</span>
          <h3>Audio Visual Tools</h3>
          <p>
            Projectors, cameras, television and other multimedia equipment
            support technology-assisted teaching.
          </p>
        </div>

        <div className="facility-mini-card">
          <span>04</span>
          <h3>Digital Learning</h3>
          <p>
            The center provides access to digital resources and licensed
            software for educational activities.
          </p>
        </div>
      </div>
    </InnerPage>
  );
}