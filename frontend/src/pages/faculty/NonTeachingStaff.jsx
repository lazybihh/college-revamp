import InnerPage from "../../components/InnerPage";

export default function NonTeachingStaff() {
  return (
    <InnerPage
      eyebrow="FACULTY"
      title="Non-Teaching Staff"
      description="The administrative and support team working behind the scenes to keep the institution running smoothly."
      breadcrumb={["Faculty", "Non-Teaching Staff"]}
      sidebarTitle="Faculty"
      activeLink="Non-Teaching Staff"
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
        <span className="inner-content-eyebrow">SUPPORT STAFF</span>

        <h2>
          The team behind the <em>college.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          The non-teaching staff plays an important role in supporting the
          academic, administrative and day-to-day functioning of the college.
        </p>
      </div>

      <p>
        The support team contributes to the smooth functioning of the
        institution and helps maintain an organised environment for students,
        faculty and visitors.
      </p>

      <div className="document-list">
        <div className="document-card">
          <div className="document-number">01</div>

          <div className="document-info">
            <span>STAFF DOCUMENT</span>

            <h3>Non-Teaching Staff</h3>

            <p>
              Official non-teaching staff information and staff details.
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