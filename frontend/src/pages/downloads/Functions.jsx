import InnerPage from "../../components/InnerPage";

const sidebarLinks = [
  { label: "Downloads", href: "/downloads" },
  { label: "Student Support Services", href: "/student-support-services" },
  { label: "Co Curricular Activities", href: "/co-curricular-activities" },
  { label: "Publications", href: "/publications" },
  { label: "Functions", href: "/functions" },
  { label: "Honour list", href: "/honour-list" },
  { label: "Panchayat System", href: "/panchayat-system" },
  {
    label: "Committee against Sexual Harassment",
    href: "/documents/sample.pdf",
  },
];

export default function Functions() {
  return (
    <InnerPage
      eyebrow="COLLEGE LIFE"
      title="Functions"
      description="Events and functions that bring together the college community."
      breadcrumb={["Functions"]}
      sidebarTitle="Student Support"
      sidebarLinks={sidebarLinks}
      activeLink="Functions"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="content-intro">
        <span className="section-kicker">COLLEGE EVENTS</span>
        <h2>Functions & Celebrations</h2>
        <p>
          College functions provide opportunities for students and faculty
          to come together, participate in events and celebrate important
          occasions as part of campus life.
        </p>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <span>01</span>
          <h3>College Events</h3>
          <p>
            Events and functions form an important part of the wider
            educational experience.
          </p>
        </div>

        <div className="info-card">
          <span>02</span>
          <h3>Participation</h3>
          <p>
            Students get opportunities to participate and contribute to
            different activities organised by the institution.
          </p>
        </div>
      </div>
    </InnerPage>
  );
}