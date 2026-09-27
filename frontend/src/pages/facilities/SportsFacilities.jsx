import InnerPage from "../../components/InnerPage";

export default function SportsFacilities() {
  return (
    <InnerPage
      eyebrow="CAMPUS FACILITIES"
      title="Sports Facilities"
      description="Campus spaces that encourage physical activity, participation, teamwork and a balanced student experience."
      breadcrumb={["Facilities", "Sports Facilities"]}
      sidebarTitle="Facilities"
      activeLink="Sports Facilities"
      heroImage="/images/sports.jpg"
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
        <span className="inner-content-eyebrow">SPORTS & WELLNESS</span>
        <h2>
          Learning beyond the classroom through <em>sport.</em>
        </h2>
      </div>

      <div className="facility-feature facility-feature-reverse">
        <div className="facility-feature-image">
          <img
            src="/images/sports.jpg"
            alt="Sports facilities at Chhotu Ram College of Education"
          />

          <div className="facility-image-label">
            <span>08</span>
            <strong>SPORTS</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">ACTIVE CAMPUS LIFE</span>

          <h3>
            Space for movement, participation and teamwork.
          </h3>

          <p>
            Physical activity forms an important part of a balanced college
            experience. The institution provides a multipurpose play field
            that supports sports and outdoor activities.
          </p>

          <p>
            Institutional records also identify the development of sports
            spirit among students as one of the college's objectives.
          </p>

          <div className="facility-stat">
            <strong>08</strong>
            <span>Multipurpose sports and outdoor facility</span>
          </div>
        </div>
      </div>

      <div className="facility-copy">
        <h3>Developing more than academic skills.</h3>

        <p>
          Sports and physical activities give students opportunities to
          participate, collaborate and develop a sense of discipline and
          teamwork alongside their academic responsibilities.
        </p>

        <p>
          The sports infrastructure complements the college's wider focus on
          the all-round development of its students.
        </p>
      </div>
    </InnerPage>
  );
}