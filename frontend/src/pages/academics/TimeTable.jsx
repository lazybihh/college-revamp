import InnerPage from "../../components/InnerPage";

const academicLinks = [
  { label: "Academics", href: "/academics" },
  { label: "Courses Offered", href: "/courses-offered" },
  { label: "Time Table", href: "/time-table" },
  { label: "Academic Calendar", href: "/academic-calendar" },
  { label: "Examination Facility", href: "/examination-facility" },
  { label: "Student Satisfaction Survey", href: "/student-satisfaction-survey" },
  { label: "Result", href: "/result" },
];

export default function TimeTable() {
  return (
    <InnerPage
      eyebrow="ACADEMIC SCHEDULE"
      title="Time Table"
      description="Class schedules and academic timetable information."
      breadcrumb={["Academics", "Time Table"]}
      sidebarTitle="Academics"
      sidebarLinks={academicLinks}
      activeLink="Time Table"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">CLASS SCHEDULE</span>
        <h2>
          Stay organised, stay <em>prepared.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Access the latest timetable document for students and academic
          planning.
        </p>
      </div>

      <div className="document-list">
        <div className="document-card">
          <div className="document-number">01</div>

          <div className="document-info">
            <span>ACADEMIC DOCUMENT</span>
            <h3>B.Ed. Time Table</h3>
            <p>Official timetable document for B.Ed. students.</p>
          </div>

          <div className="document-actions">
            <a
              href="/documents/sample.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="document-view"
            >
              View ↗
            </a>

            <a
              href="/documents/sample.pdf"
              download
              className="document-download"
            >
              Download ↓
            </a>
          </div>
        </div>
      </div>
    </InnerPage>
  );
}