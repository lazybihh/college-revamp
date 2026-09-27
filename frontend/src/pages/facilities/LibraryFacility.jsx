import InnerPage from "../../components/InnerPage";

export default function LibraryFacility() {
  return (
    <InnerPage
      eyebrow="CAMPUS FACILITIES"
      title="Library Facility"
      description="A rich academic resource centre supporting reading, research, reference work and independent learning."
      breadcrumb={["Facilities", "Library Facility"]}
      sidebarTitle="Facilities"
      activeLink="Library Facility"
      heroImage="/images/library.jpg"
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
        <span className="inner-content-eyebrow">KNOWLEDGE RESOURCE</span>
        <h2>
          The library as a space for <em>discovery.</em>
        </h2>
      </div>

      <div className="facility-feature">
        <div className="facility-feature-image">
          <img
            src="/images/library.jpg"
            alt="Library at Chhotu Ram College of Education"
          />

          <div className="facility-image-label">
            <span>03</span>
            <strong>LIBRARY</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">ACADEMIC RESOURCE</span>

          <h3>
            A rich collection built around teacher education.
          </h3>

          <p>
            The college library serves as an important academic resource for
            students and faculty, providing books, journals, newspapers,
            magazines and reference material.
          </p>

          <p>
            Its resources are supported by dedicated reading spaces, an
            e-learning centre and a range of library services designed to help
            users locate and use academic information effectively.
          </p>

          <div className="facility-stat">
            <strong>21,830+</strong>
            <span>Books documented in the published library information</span>
          </div>
        </div>
      </div>

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>15K+</strong>
          <span>Titles</span>
        </div>

        <div className="inner-fact">
          <strong>58</strong>
          <span>Education Journals</span>
        </div>

        <div className="inner-fact">
          <strong>70</strong>
          <span>Reading Room Seats</span>
        </div>
      </div>

      <div className="facility-copy">
        <h3>Resources beyond textbooks.</h3>

        <p>
          The library collection includes education-related journals,
          newspapers, magazines and audio-visual resources. Reference
          materials and periodicals provide additional support for academic
          study and professional preparation.
        </p>

        <p>
          The library also provides access to an e-learning centre, CD-ROM,
          audio, video and DVD resources, along with services such as
          bibliographic assistance, current awareness, newspaper clipping,
          referral and user orientation.
        </p>
      </div>

      <div className="facility-grid">
        <div className="facility-mini-card">
          <span>01</span>
          <h3>Reading Spaces</h3>
          <p>
            Two reading rooms provide dedicated space for students to study
            and consult academic resources.
          </p>
        </div>

        <div className="facility-mini-card">
          <span>02</span>
          <h3>E-Learning Centre</h3>
          <p>
            Digital learning facilities complement the library's physical
            collection.
          </p>
        </div>

        <div className="facility-mini-card">
          <span>03</span>
          <h3>Reference Section</h3>
          <p>
            Reference and periodical resources support deeper academic
            exploration.
          </p>
        </div>

        <div className="facility-mini-card">
          <span>04</span>
          <h3>Library Services</h3>
          <p>
            Users can benefit from orientation, bibliographic, referral and
            current-awareness services.
          </p>
        </div>
      </div>
    </InnerPage>
  );
}