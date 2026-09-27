import InnerPage from "../../components/InnerPage";

export default function ScienceMathematicsLab() {
  return (
    <InnerPage
      eyebrow="CAMPUS FACILITIES"
      title="Science & Mathematics Lab"
      description="Practical learning spaces supporting experimentation, exploration and activity-based teaching."
      breadcrumb={["Facilities", "Science & Mathematics Lab"]}
      sidebarTitle="Facilities"
      activeLink="Science & Mathematics Lab"
      heroImage="/images/science-mathematics-lab.jpg"
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
        <span className="inner-content-eyebrow">PRACTICAL EDUCATION</span>
        <h2>
          Exploring ideas through <em>practice.</em>
        </h2>
      </div>

      <div className="facility-feature">
        <div className="facility-feature-image">
          <img
            src="/images/science-mathematics-lab.jpg"
            alt="Science and Mathematics Lab"
          />

          <div className="facility-image-label">
            <span>07</span>
            <strong>SCIENCE + MATHS</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">
            SCIENCE & MATHEMATICS
          </span>

          <h3>
            Practical learning for future teachers of science and mathematics.
          </h3>

          <p>
            The college provides dedicated laboratory resources for practical
            work associated with science and mathematics education.
          </p>

          <p>
            Such spaces allow students to experience activity-based learning
            and develop an understanding of how practical experiences can be
            translated into effective classroom teaching.
          </p>

          <div className="facility-stat">
            <strong>07</strong>
            <span>Dedicated science and mathematics learning facility</span>
          </div>
        </div>
      </div>

      <div className="facility-copy">
        <h3>Where concepts become practical.</h3>

        <p>
          Practical work plays an important role in helping learners connect
          theoretical concepts with observation and activity. For future
          educators, this experience is especially valuable because it helps
          them understand how to design engaging learning experiences for
          school students.
        </p>

        <p>
          The Science & Mathematics facility forms part of the college's
          departmental laboratory infrastructure.
        </p>
      </div>
    </InnerPage>
  );
}