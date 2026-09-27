import InnerPage from "../../components/InnerPage";

const sidebarLinks = [
  { label: "Downloads", href: "/downloads" },
  { label: "Student Support Services", href: "/student-support-services" },
  { label: "Co Curricular Activities", href: "/co-curricular-activities" },
  { label: "Publications", href: "/publications" },
  { label: "Functions", href: "/functions" },
  { label: "Honour list", href: "/honour-list" },
  { label: "Panchayat System", href: "/panchayat-system" },
  {
    label: "Committee against Sexual Harassment",
    href: "/documents/sample.pdf",
  },
];

export default function CoCurricularActivities() {
  return (
    <InnerPage
      eyebrow="STUDENT LIFE"
      title="Co Curricular Activities"
      description="Activities that encourage participation, creativity and the overall development of student teachers."
      breadcrumb={["Co Curricular Activities"]}
      sidebarTitle="Student Support"
      sidebarLinks={sidebarLinks}
      activeLink="Co Curricular Activities"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="content-intro">
        <span className="section-kicker">STUDENT DEVELOPMENT</span>
        <h2>Co Curricular Activities</h2>
        <p>
          Co-curricular activities form an important part of college life,
          giving students opportunities to participate beyond the regular
          classroom environment.
        </p>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <span>01</span>
          <h3>Participation</h3>
          <p>
            Students are encouraged to take part in activities, events and
            competitions organised through the institution.
          </p>
        </div>

        <div className="info-card">
          <span>02</span>
          <h3>Skills & Confidence</h3>
          <p>
            Participation provides opportunities to develop confidence,
            cooperation, creativity and leadership.
          </p>
        </div>

        <div className="info-card">
          <span>03</span>
          <h3>Student Life</h3>
          <p>
            Activities complement academic learning and contribute to a
            broader educational experience.
          </p>
        </div>
      </div>
    </InnerPage>
  );
}