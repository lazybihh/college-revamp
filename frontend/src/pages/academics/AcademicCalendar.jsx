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

export default function AcademicCalendar() {
  return (
    <InnerPage
      eyebrow="ACADEMIC YEAR"
      title="Academic Calendar"
      description="Academic schedules and important activities across the session."
      breadcrumb={["Academics", "Academic Calendar"]}
      sidebarTitle="Academics"
      sidebarLinks={academicLinks}
      activeLink="Academic Calendar"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          ACADEMIC PLANNING
        </span>

        <h2>
          Every session with a clear <em>direction.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          View the academic calendar document containing important academic
          dates and activities.
        </p>
      </div>

      <div className="document-list">
        <div className="document-card">
          <div className="document-number">01</div>

          <div className="document-info">
            <span>ACADEMIC CALENDAR</span>
            <h3>Academic Calendar</h3>
            <p>
              Official academic calendar document for the college session.
            </p>
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