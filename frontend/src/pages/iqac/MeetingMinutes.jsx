import InnerPage from "../../components/InnerPage";

const iqacLinks = [
  { label: "IQAC", href: "/iqac" },
  { label: "Meeting Minutes", href: "/meeting-minutes" },
  { label: "AQAR Reports", href: "/aqar-reports" },
  { label: "AQAR List", href: "/aqar-list" },
];

const meetings = [
  "2019–20",
  "2020–21",
  "2021–22",
  "2022–23",
  "2023–24",
];

export default function MeetingMinutes() {
  return (
    <InnerPage
      eyebrow="QUALITY ASSURANCE"
      title="Meeting Minutes"
      description="Records of IQAC meetings and institutional quality assurance discussions."
      breadcrumb={["IQAC", "Meeting Minutes"]}
      sidebarTitle="IQAC"
      activeLink="Meeting Minutes"
      heroImage="/images/academics.jpg"
      sidebarLinks={iqacLinks}
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          IQAC RECORDS
        </span>

        <h2>
          Meetings that support <em>continuous improvement.</em>
        </h2>
      </div>

      <div className="facility-copy">
        <p>
          The college maintains records of IQAC meetings conducted during
          different academic sessions. These records document discussions,
          planning and quality-related institutional activities.
        </p>
      </div>

      <div className="document-list">
        {meetings.map((year, index) => (
          <div className="document-card" key={year}>
            <div className="document-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="document-info">
              <span>IQAC MEETING</span>

              <h3>Meeting Minutes {year}</h3>

              <p>
                IQAC meeting record for the academic session {year}.
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
        <h3>IQAC documentation</h3>

        <p>
          The meeting records listed above represent the academic sessions
          currently presented under the IQAC Meeting Minutes section.
        </p>
      </div>
    </InnerPage>
  );
}