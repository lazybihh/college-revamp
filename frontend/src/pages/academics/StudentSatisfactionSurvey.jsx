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

export default function StudentSatisfactionSurvey() {
  return (
    <InnerPage
      eyebrow="STUDENT FEEDBACK"
      title="Student Satisfaction Survey"
      description="Student feedback and satisfaction survey document."
      breadcrumb={["Academics", "Student Satisfaction Survey"]}
      sidebarTitle="Academics"
      sidebarLinks={academicLinks}
      activeLink="Student Satisfaction Survey"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          STUDENT FEEDBACK
        </span>

        <h2>
          Listening to our <em>students.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Access the student satisfaction survey document used for collecting
          student feedback.
        </p>
      </div>

      <div className="document-list">
        <div className="document-card">
          <div className="document-number">01</div>

          <div className="document-info">
            <span>STUDENT FEEDBACK</span>
            <h3>Student Satisfaction Survey</h3>
            <p>
              Official student satisfaction survey document.
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