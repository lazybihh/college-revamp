import InnerPage from "../../components/InnerPage";

export default function TeachingStaff() {
  return (
    <InnerPage
      eyebrow="FACULTY"
      title="Teaching Staff"
      description="Teaching faculty information and official staff details of the college."
      breadcrumb={["Faculty", "Teaching Staff"]}
      sidebarTitle="Faculty"
      activeLink="Teaching Staff"
      heroImage="/images/campus-wide.jpg"
      sidebarLinks={[
        {
          label: "An Ideal Teacher",
          href: "/an-ideal-teacher",
        },
        {
          label: "Teaching Staff",
          href: "/teaching-staff",
        },
        {
          label: "Non-Teaching Staff",
          href: "/non-teaching-staff",
        },
      ]}
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">FACULTY DOCUMENT</span>

        <h2>
          Meet our <em>teaching faculty.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Explore the official teaching staff information of Chhotu Ram
          College of Education.
        </p>
      </div>

      <p>
        The teaching faculty contributes to the academic environment of the
        college through classroom teaching, student guidance and professional
        development.
      </p>

      <div className="document-list">
        <div className="document-card">
          <div className="document-number">01</div>

          <div className="document-info">
            <span>FACULTY DOCUMENT</span>

            <h3>Teaching Staff</h3>

            <p>
              Official teaching staff information and faculty details.
            </p>
          </div>

          <div className="document-actions">
            <a
              href="/documents/sample.pdf"
              target="_blank"
              rel="noreferrer"
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