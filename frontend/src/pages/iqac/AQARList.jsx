import InnerPage from "../../components/InnerPage";

const iqacLinks = [
  { label: "IQAC", href: "/iqac" },
  { label: "Meeting Minutes", href: "/meeting-minutes" },
  { label: "AQAR Reports", href: "/aqar-reports" },
  { label: "AQAR List", href: "/aqar-list" },
];

const years = [
  "2018–19",
  "2019–20",
  "2020–21",
  "2021–22",
  "2022–23",
  "2023–24",
];

export default function AQARList() {
  return (
    <InnerPage
      eyebrow="QUALITY ASSURANCE"
      title="AQAR List"
      description="Academic-session wise listing of Annual Quality Assurance Reports."
      breadcrumb={["IQAC", "AQAR List"]}
      sidebarTitle="IQAC"
      activeLink="AQAR List"
      heroImage="/images/academics.jpg"
      sidebarLinks={iqacLinks}
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          AQAR ARCHIVE
        </span>

        <h2>
          A growing record of <em>institutional quality.</em>
        </h2>
      </div>

      <div className="facility-copy">
        <p>
          The AQAR list provides an academic-session wise view of the Annual
          Quality Assurance Reports maintained by the college.
        </p>
      </div>

      <div className="document-list">
        {years.map((year, index) => (
          <div className="document-card" key={year}>
            <div className="document-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="document-info">
              <span>QUALITY ASSURANCE ARCHIVE</span>

              <h3>AQAR {year}</h3>

              <p>
                Annual Quality Assurance Report for academic session {year}.
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

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>06</strong>
          <span>Academic Sessions Listed</span>
        </div>

        <div className="inner-fact">
          <strong>AQAR</strong>
          <span>Annual Quality Reporting</span>
        </div>

        <div className="inner-fact">
          <strong>IQAC</strong>
          <span>Quality Assurance Cell</span>
        </div>
      </div>
    </InnerPage>
  );
}