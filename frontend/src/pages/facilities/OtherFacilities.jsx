import InnerPage from "../../components/InnerPage";

export default function OtherFacilities() {
  return (
    <InnerPage
      eyebrow="CAMPUS FACILITIES"
      title="Other Facilities"
      description="Additional campus infrastructure that supports everyday academic life, comfort, safety and student activities."
      breadcrumb={["Facilities", "Other Facilities"]}
      sidebarTitle="Facilities"
      activeLink="Other Facilities"
      heroImage="/images/other-facilities.jpg"
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
        <span className="inner-content-eyebrow">CAMPUS INFRASTRUCTURE</span>
        <h2>
          The details that make a campus <em>work.</em>
        </h2>
      </div>

      <div className="facility-feature facility-feature-reverse">
        <div className="facility-feature-image">
          <img
            src="/images/other-facilities.jpg"
            alt="Campus facilities at Chhotu Ram College of Education"
          />

          <div className="facility-image-label">
            <span>10</span>
            <strong>CAMPUS</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">CAMPUS SUPPORT</span>

          <h3>
            Practical infrastructure supporting everyday college life.
          </h3>

          <p>
            Beyond classrooms and laboratories, the college campus includes
            additional facilities that support academic activities, student
            comfort and day-to-day operations.
          </p>

          <p>
            Institutional records describe facilities including a multipurpose
            hall, seminar room, washrooms, open spaces, drinking-water
            facilities, playgrounds and power-backup infrastructure.
          </p>

          <div className="facility-stat">
            <strong>10</strong>
            <span>Additional campus and support facilities</span>
          </div>
        </div>
      </div>

      <div className="facility-grid">
        <div className="facility-mini-card">
          <span>01</span>
          <h3>Multipurpose Hall</h3>
          <p>
            A flexible campus space for institutional activities and
            gatherings.
          </p>
        </div>

        <div className="facility-mini-card">
          <span>02</span>
          <h3>Seminar Space</h3>
          <p>
            Dedicated space supporting seminars, discussions and academic
            activities.
          </p>
        </div>

        <div className="facility-mini-card">
          <span>03</span>
          <h3>Campus Amenities</h3>
          <p>
            Water facilities, washrooms, lawns and open spaces contribute to
            everyday campus comfort.
          </p>
        </div>

        <div className="facility-mini-card">
          <span>04</span>
          <h3>Power & Maintenance</h3>
          <p>
            Inverter, generator and regular infrastructure maintenance support
            continuity of campus operations.
          </p>
        </div>
      </div>

      <div className="facility-copy">
        <h3>A campus designed around everyday needs.</h3>

        <p>
          Institutional infrastructure is maintained through a systematic
          process involving campus committees, regular maintenance and
          periodic inspection of facilities and equipment.
        </p>

        <p>
          The college also maintains support systems for computers, networks,
          printers, projectors, scanners and other campus equipment.
        </p>
      </div>
    </InnerPage>
  );
}