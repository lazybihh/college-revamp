import InnerPage from "../../components/InnerPage";

const sidebarLinks = [
  { label: "NCTE Documents", href: "/ncte-documents" },
];

const documents = [
  "Affidavit",
  "Audit Report",
  "Balance Sheet for Financial Year",
  "Income and Expenditure Account for Financial Year",
  "Infrastructure Detail",
  "Land Document",
  "List of B.Ed. Student of session 2018-19",
  "List of Instructional Facilities during last quarter",
  "List of Journals",
  "List of M.Ed. Student of session 2017-19",
  "List of M.Ed. Student of session 2018-20",
  "List of M.Ed. Student of session 2019-21",
  "List of M.Ed. Student of session 2020-22",
  "Mandatory Disclosure",
  "NCTE Order",
  "Receipt & Payment Account for Financial Year",
  "Revised Recognition Order of B.Ed by NCTE",
  "Revised Recognition Order of M.Ed by NCTE",
  "Society Registration",
  "Student List of B.Ed. IInd Year 2018-20",
  "Student List of B.Ed. Ist year 2019-21",
  "Student List of M.Ed. I Semester",
  "Student List of M.Ed. III Semester",
  "Students List of B.Ed Ist year 2020-2022",
  "Teaching Staff",
];

export default function NCTEDocuments() {
  return (
    <InnerPage
      eyebrow="MANDATORY DOCUMENTS"
      title="NCTE Documents"
      description="Official documents and disclosures related to NCTE recognition and institutional requirements."
      breadcrumb={["NCTE Documents"]}
      sidebarTitle="Mandatory Documents"
      sidebarLinks={sidebarLinks}
      activeLink="NCTE Documents"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="content-intro">
        <span className="section-kicker">OFFICIAL DOCUMENTS</span>
        <h2>NCTE Documents</h2>
        <p>
          Browse the official documents made available by Chhotu Ram College
          of Education in relation to its NCTE requirements and institutional
          records.
        </p>
      </div>

      <div className="document-list">
        {documents.map((document, index) => (
          <article className="document-card" key={document}>
            <div className="document-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="document-info">
              <span>NCTE DOCUMENT</span>
              <h3>{document}</h3>
            </div>

            <a
              className="document-view"
              href="/documents/sample.pdf"
              target="_blank"
              rel="noreferrer"
            >
              VIEW PDF
            </a>
          </article>
        ))}
      </div>
    </InnerPage>
  );
}