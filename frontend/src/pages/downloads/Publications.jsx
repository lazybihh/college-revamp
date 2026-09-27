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

export default function Publications() {
  return (
    <InnerPage
      eyebrow="ACADEMIC RESOURCES"
      title="Publications"
      description="Explore the publications and academic resources associated with the college."
      breadcrumb={["Publications"]}
      sidebarTitle="Student Support"
      sidebarLinks={sidebarLinks}
      activeLink="Publications"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="content-intro">
        <span className="section-kicker">PUBLICATIONS</span>
        <h2>Academic & Institutional Publications</h2>
        <p>
          This section provides a dedicated space for publications and
          academic material associated with the college.
        </p>
      </div>

      <div className="highlight-box">
        <span className="highlight-number">01</span>

        <div>
          <h3>Publications</h3>
          <p>
            Publications contribute to the sharing of ideas, academic work
            and institutional knowledge among students and faculty.
          </p>
        </div>
      </div>
    </InnerPage>
  );
}