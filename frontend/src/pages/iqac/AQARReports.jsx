import InnerPage from "../../components/InnerPage";

const iqacLinks = [
  { label: "IQAC", href: "/iqac" },
  { label: "Meeting Minutes", href: "/meeting-minutes" },
  { label: "AQAR Reports", href: "/aqar-reports" },
  { label: "AQAR List", href: "/aqar-list" },
];

const reports = [
  "2023–24",
  "2022–23",
  "2021–22",
  "2020–21",
  "2019–20",
];

export default function AQARReports() {
  return (
    <InnerPage
      eyebrow="QUALITY ASSURANCE"
      title="AQAR Reports"
      description="Annual Quality Assurance Reports documenting institutional quality initiatives and progress."
      breadcrumb={["IQAC", "AQAR Reports"]}
      sidebarTitle="IQAC"
      activeLink="AQAR Reports"
      heroImage="/images/academics.jpg"
      sidebarLinks={iqacLinks}
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          ANNUAL QUALITY ASSURANCE
        </span>

        <h2>
          Documenting progress through <em>AQAR.</em>
        </h2>
      </div>

      <div className="facility-feature">
        <div className="facility-feature-image">
          <img
            src="/images/academics.jpg"
            alt="Annual Quality Assurance Reports"
          />

          <div className="facility-image-label">
            <span>01</span>
            <strong>AQAR</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">
            QUALITY DOCUMENTATION
          </span>

          <h3>
            Annual reporting for institutional quality.
          </h3>

          <p>
            The Annual Quality Assurance Report (AQAR) forms part of the
            college's quality assurance process and records institutional
            activities and progress for individual academic sessions.
          </p>

          <p>
            The IQAC prepares the AQAR as part of its annual quality
            monitoring and documentation process.
          </p>
        </div>
      </div>

      <div className="document-list">
        {reports.map((year, index) => (
          <div className="document-card" key={year}>
            <div className="document-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="document-info">
              <span>ANNUAL QUALITY ASSURANCE REPORT</span>

              <h3>AQAR {year}</h3>

              <p>
                Annual Quality Assurance Report for the academic session{" "}
                {year}.
              </p>
            </div>

            <div className="document-actions">
              <a
                className="document-view"
                href="/documents/sample.pdf"
                target="_blank"
                rel="noreferrer"
              >
                VIEW PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="facility-copy">
        <h3>Annual quality documentation</h3>

        <p>
          The AQAR records presented here cover the sessions currently listed
          under the AQAR Reports section.
        </p>
      </div>
    </InnerPage>
  );
}