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

const supportServices = [
  {
    number: "01",
    title: "Grievance Redressal Cell",
    person: "Dr. Sunita Arya",
  },
  {
    number: "02",
    title: "Placement Cell",
    person: "Dr. Sunita Arya",
  },
  {
    number: "03",
    title: "SC / ST Cell",
    person: "Dr. Indu Bala Tehlan",
  },
  {
    number: "04",
    title: "Guidance & Counseling Cell",
    person: "Dr. Indu Bala — Convener",
  },
  {
    number: "05",
    title: "Legal Cell",
    person: "Dr. Sunita Arya — Convener",
  },
  {
    number: "06",
    title: "Current Affair Forum",
    person: "Student Support",
  },
  {
    number: "07",
    title: "Canteen",
    person: "Student Support",
  },
];

export default function StudentSupport() {
  return (
    <InnerPage
      eyebrow="STUDENT SUPPORT"
      title="Student Support Services"
      description="Support systems and services available for the student community."
      breadcrumb={["Student Support Services"]}
      sidebarTitle="Student Support"
      sidebarLinks={sidebarLinks}
      activeLink="Student Support Services"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="content-intro">
        <span className="section-kicker">STUDENT SERVICES</span>
        <h2>Support Beyond the Classroom</h2>
        <p>
          The college provides a range of support services and cells
          addressing academic, career, personal, legal and student-welfare
          needs.
        </p>
      </div>

      <div className="document-list">
        {supportServices.map((item) => (
          <article className="document-card" key={item.number}>
            <div className="document-number">{item.number}</div>

            <div className="document-info">
              <span>STUDENT SUPPORT</span>
              <h3>{item.title}</h3>
              <p>{item.person}</p>
            </div>
          </article>
        ))}
      </div>
    </InnerPage>
  );
}