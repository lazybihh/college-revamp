import InnerPage from "../../components/InnerPage";

export default function WomenCell() {
  return (
    <InnerPage
      eyebrow="STUDENT SUPPORT"
      title="Women Cell"
      description="A dedicated institutional support space focused on awareness, participation, dignity and student wellbeing."
      breadcrumb={["Facilities", "Women Cell"]}
      sidebarTitle="Facilities"
      activeLink="Women Cell"
      heroImage="/images/women-cell.jpg"
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
        <span className="inner-content-eyebrow">STUDENT SUPPORT</span>
        <h2>
          Supporting a campus built around <em>respect.</em>
        </h2>
      </div>

      <div className="facility-feature">
        <div className="facility-feature-image">
          <img
            src="/images/women-cell.jpg"
            alt="Women Cell"
          />

          <div className="facility-image-label">
            <span>09</span>
            <strong>WOMEN CELL</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">AWARENESS & SUPPORT</span>

          <h3>
            Creating an environment where students can participate with
            confidence.
          </h3>

          <p>
            The Women Cell forms part of the college's student-support
            infrastructure and provides an institutional space for activities
            related to women's awareness, participation and support.
          </p>

          <p>
            It complements the college's wider student-centric approach and
            its emphasis on the overall development of learners.
          </p>

          <div className="facility-stat">
            <strong>09</strong>
            <span>Dedicated student-support initiative</span>
          </div>
        </div>
      </div>

      <div className="facility-copy">
        <h3>Awareness, participation and support.</h3>

        <p>
          A supportive educational environment allows students to engage in
          academic and campus activities with confidence. Institutional
          support structures such as the Women Cell contribute to this wider
          environment.
        </p>

        <p>
          The cell sits alongside the college's broader support systems and
          student-focused activities.
        </p>
      </div>
    </InnerPage>
  );
}