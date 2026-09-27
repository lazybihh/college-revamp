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

export default function Result() {
  return (
    <InnerPage
      eyebrow="EXAMINATION RESULTS"
      title="Result"
      description="Examination result document and academic records."
      breadcrumb={["Academics", "Result"]}
      sidebarTitle="Academics"
      sidebarLinks={academicLinks}
      activeLink="Result"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          RESULTS & RECORDS
        </span>

        <h2>
          Academic progress, clearly <em>presented.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Access the examination result document for students of Chhotu Ram
          College of Education.
        </p>
      </div>

      <div className="document-list">
        <div className="document-card">
          <div className="document-number">01</div>

          <div className="document-info">
            <span>EXAMINATION RESULT</span>
            <h3>Examination Result</h3>
            <p>
              Official examination result document.
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