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

const downloads = [
  {
    number: "01",
    title: "Seminar Brochure / Registration Form",
    text: "One-day interdisciplinary national seminar sponsored by DGHE.",
    meta: "14 OCT 2018",
  },
  {
    number: "02",
    title: "Application Form of Head Clerk",
    text: "Application form for the post of Head Clerk.",
    meta: "APPLICATION FORM",
  },
  {
    number: "03",
    title: "Regular Grant-in-Aid Recruitment",
    text: "Invitation for applications for Head Clerk – 1 and Sweeper – 1, General category.",
    meta: "HEAD CLERK · SWEEPER",
  },
];

export default function Downloads() {
  return (
    <InnerPage
      eyebrow="RESOURCES"
      title="Downloads"
      description="Access official forms, brochures and downloadable resources."
      breadcrumb={["Downloads"]}
      sidebarTitle="Student Support"
      sidebarLinks={sidebarLinks}
      activeLink="Downloads"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="content-intro">
        <span className="section-kicker">OFFICIAL RESOURCES</span>
        <h2>Documents & Downloads</h2>
        <p>
          Browse the available forms, brochures and official resources
          provided through the college website.
        </p>
      </div>

      <div className="document-list">
        {downloads.map((item) => (
          <article className="document-card" key={item.number}>
            <div className="document-number">{item.number}</div>

            <div className="document-info">
              <span>{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
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