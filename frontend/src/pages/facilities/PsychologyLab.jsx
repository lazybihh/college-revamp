import InnerPage from "../../components/InnerPage";

export default function PsychologyLab() {
  return (
    <InnerPage
      eyebrow="CAMPUS FACILITIES"
      title="Psychology Lab"
      description="A practical resource centre supporting the study of educational psychology and learner development."
      breadcrumb={["Facilities", "Psychology Lab"]}
      sidebarTitle="Facilities"
      activeLink="Psychology Lab"
      heroImage="/images/psychology-lab.jpg"
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
        <span className="inner-content-eyebrow">EDUCATIONAL PSYCHOLOGY</span>
        <h2>
          Understanding learners through <em>experience.</em>
        </h2>
      </div>

      <div className="facility-feature facility-feature-reverse">
        <div className="facility-feature-image">
          <img
            src="/images/psychology-lab.jpg"
            alt="Psychology Lab at Chhotu Ram College of Education"
          />

          <div className="facility-image-label">
            <span>06</span>
            <strong>PSYCHOLOGY</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">PSYCHOLOGY RESOURCE CENTRE</span>

          <h3>
            Connecting educational theory with learner behaviour.
          </h3>

          <p>
            Psychology is an important part of teacher education. The college
            maintains a dedicated Psychology Resource Centre to support
            practical and academic learning in this area.
          </p>

          <p>
            The facility provides a space in which students can connect
            concepts related to learning and development with their future
            responsibilities as educators.
          </p>

          <div className="facility-stat">
            <strong>06</strong>
            <span>Dedicated psychology resource facility</span>
          </div>
        </div>
      </div>

      <div className="facility-copy">
        <h3>Learning to understand the learner.</h3>

        <p>
          A strong understanding of learners helps teachers respond to
          different abilities, interests and learning needs. Practical
          exposure to educational psychology supports this aspect of
          professional preparation.
        </p>

        <p>
          The Psychology Resource Centre forms part of the college's wider
          laboratory and academic infrastructure for teacher education.
        </p>
      </div>
    </InnerPage>
  );
}