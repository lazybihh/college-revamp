import InnerPage from "../../components/InnerPage";

export default function HomeScienceLab() {
  return (
    <InnerPage
      eyebrow="CAMPUS FACILITIES"
      title="Home Science Lab"
      description="A practical learning space supporting hands-on experiences in home science and related educational activities."
      breadcrumb={["Facilities", "Home Science Lab"]}
      sidebarTitle="Facilities"
      activeLink="Home Science Lab"
      heroImage="/images/home-science-lab.jpg"
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
        <span className="inner-content-eyebrow">PRACTICAL LEARNING</span>
        <h2>
          Learning through <em>hands-on experience.</em>
        </h2>
      </div>

      <div className="facility-feature facility-feature-reverse">
        <div className="facility-feature-image">
          <img
            src="/images/home-science-lab.jpg"
            alt="Home Science Lab"
          />

          <div className="facility-image-label">
            <span>04</span>
            <strong>HOME SCIENCE</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">PRACTICAL SPACE</span>

          <h3>
            A dedicated environment for learning by doing.
          </h3>

          <p>
            The Home Science Lab forms part of the college's practical
            learning infrastructure and provides students with a dedicated
            environment for activities connected with home science education.
          </p>

          <p>
            Practical resource centres such as Home Science help future
            teachers connect academic concepts with activity-based learning
            and develop skills that can be transferred into classroom
            practice.
          </p>

          <div className="facility-stat">
            <strong>04</strong>
            <span>Part of the college's dedicated practical resource areas</span>
          </div>
        </div>
      </div>

      <div className="facility-copy">
        <h3>From concept to practical understanding.</h3>

        <p>
          Teacher education extends beyond classroom theory. Practical spaces
          give students opportunities to explore educational activities,
          develop confidence and understand how experiential learning can be
          incorporated into teaching.
        </p>

        <p>
          The college's institutional records identify Home Science alongside
          other dedicated resource centres including ICT, Science &
          Mathematics, Psychology, Art & Crafts and Languages.
        </p>
      </div>
    </InnerPage>
  );
}