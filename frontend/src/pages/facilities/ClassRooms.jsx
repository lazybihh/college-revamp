import InnerPage from "../../components/InnerPage";

export default function ClassRooms() {
  return (
    <InnerPage
      eyebrow="CAMPUS FACILITIES"
      title="Class Rooms"
      description="Spacious and thoughtfully equipped learning spaces designed to support effective teacher education."
      breadcrumb={["Facilities", "Class Rooms"]}
      sidebarTitle="Facilities"
      activeLink="Class Rooms"
      heroImage="/images/classroom.jpg"
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
        <span className="inner-content-eyebrow">LEARNING SPACES</span>
        <h2>
          Classrooms designed for <em>active learning.</em>
        </h2>
      </div>

      <div className="facility-feature">
        <div className="facility-feature-image">
          <img
            src="/images/classroom.jpg"
            alt="Classroom at Chhotu Ram College of Education"
          />

          <div className="facility-image-label">
            <span>01</span>
            <strong>LEARNING SPACE</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">THE CLASSROOM</span>

          <h3>
            Spaces that support meaningful teaching and learning.
          </h3>

          <p>
            The classrooms at Chhotu Ram College of Education are spacious,
            well planned and designed to provide a comfortable academic
            environment for students.
          </p>

          <p>
            The college has equipped its teaching spaces with facilities that
            support contemporary classroom practices and create an environment
            where future teachers can develop their professional skills.
          </p>

          <div className="facility-stat">
            <strong>21</strong>
            <span>Classrooms documented in institutional records</span>
          </div>
        </div>
      </div>

      <div className="facility-copy">
        <h3>A focused environment for future educators.</h3>

        <p>
          Classroom learning is an important part of teacher education. The
          college provides dedicated academic spaces where students can engage
          with theoretical concepts, participate in discussions and prepare
          themselves for professional teaching responsibilities.
        </p>

        <p>
          Institutional records describe the classrooms as well furnished,
          ventilated and spacious, with provisions for modern teaching and
          learning facilities.
        </p>
      </div>
    </InnerPage>
  );
}