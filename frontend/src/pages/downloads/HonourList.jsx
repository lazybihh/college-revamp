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

export default function HonourList() {
  return (
    <InnerPage
      eyebrow="ACHIEVEMENT"
      title="Honour List"
      description="Recognition of achievement and contribution within the college community."
      breadcrumb={["Honour List"]}
      sidebarTitle="Student Support"
      sidebarLinks={sidebarLinks}
      activeLink="Honour list"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="content-intro">
        <span className="section-kicker">RECOGNITION</span>
        <h2>Honour List</h2>
        <p>
          The honour list section highlights recognition associated with
          students and the college community.
        </p>
      </div>

      <div className="highlight-box">
        <span className="highlight-number">01</span>

        <div>
          <h3>Honours & Recognition</h3>
          <p>
            This space is dedicated to acknowledging achievements and
            distinctions within the institution.
          </p>
        </div>
      </div>
    </InnerPage>
  );
}