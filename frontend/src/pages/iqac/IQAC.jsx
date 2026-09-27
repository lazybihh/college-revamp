import InnerPage from "../../components/InnerPage";

const iqacLinks = [
  { label: "IQAC", href: "/iqac" },
  { label: "Meeting Minutes", href: "/meeting-minutes" },
  { label: "AQAR Reports", href: "/aqar-reports" },
  { label: "AQAR List", href: "/aqar-list" },
];

const activities = [
  "Short term training courses for students",
  "Awareness programmes for schools and community",
  "Seminars and workshops",
  "Workshops for school teachers",
  "Development of ICT skills",
  "Establishment of smart classrooms",
  "Language proficiency development",
  "Personality development programmes",
  "Health check-up programmes and blood donation camps",
  "Educational tours and field trips",
  "Community based activities",
  "Inter-club and inter-college competitions",
];

export default function IQAC() {
  return (
    <InnerPage
      eyebrow="QUALITY ASSURANCE"
      title="IQAC"
      description="Internal Quality Assurance Cell for continuous quality improvement and academic development."
      breadcrumb={["IQAC"]}
      sidebarTitle="IQAC"
      activeLink="IQAC"
      heroImage="/images/academics.jpg"
      sidebarLinks={iqacLinks}
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">QUALITY ASSURANCE CELL</span>
        <h2>
          Building a culture of <em>continuous improvement.</em>
        </h2>
      </div>

      <div className="facility-feature">
        <div className="facility-feature-image">
          <img
            src="/images/academics.jpg"
            alt="Quality assurance and academic development"
          />

          <div className="facility-image-label">
            <span>01</span>
            <strong>IQAC</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">
            ESTABLISHED IN 2004
          </span>

          <h3>
            Strengthening quality across the institution.
          </h3>

          <p>
            Chhotu Ram College of Education established its Internal Quality
            Assurance Cell (IQAC) in 2004. The IQAC follows the norms and
            guidelines of NAAC while working towards institutional quality
            enhancement.
          </p>

          <p>
            Its work focuses on quality upgradation, assessment and
            accreditation, performance evaluation, teaching proficiency,
            values and the continuous development of the institution.
          </p>

          <div className="facility-stat">
            <strong>2004</strong>
            <span>Year of establishment of the IQAC</span>
          </div>
        </div>
      </div>

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>2004</strong>
          <span>IQAC Established</span>
        </div>

        <div className="inner-fact">
          <strong>NAAC</strong>
          <span>Quality Guidelines</span>
        </div>

        <div className="inner-fact">
          <strong>AQAR</strong>
          <span>Annual Quality Reporting</span>
        </div>
      </div>

      <div className="facility-copy">
        <h3>Purpose of the IQAC</h3>

        <p>
          The IQAC works towards quality upgradation of the institution,
          assessment and accreditation, performance evaluation and enhancement
          of good morals and ideals.
        </p>

        <p>
          It also focuses on improving teaching proficiency among prospective
          teachers, uplifting values and responding to the continuous
          expansion of knowledge.
        </p>
      </div>

      <div className="inner-objectives">
        <span className="inner-content-eyebrow">WORKING OF IQAC</span>

        <h3>From planning to quality assurance.</h3>

        <div className="objective-grid">
          <div className="objective-item">
            <strong>01</strong>
            <span>Communicating IQAC roles and activities</span>
          </div>

          <div className="objective-item">
            <strong>02</strong>
            <span>Maintaining proper documentation and data</span>
          </div>

          <div className="objective-item">
            <strong>03</strong>
            <span>Preparing annual action plans</span>
          </div>

          <div className="objective-item">
            <strong>04</strong>
            <span>Monitoring institutional progress</span>
          </div>

          <div className="objective-item">
            <strong>05</strong>
            <span>Preparing the Annual Quality Assurance Report</span>
          </div>
        </div>
      </div>

      <div className="facility-copy">
        <h3>Major activities</h3>

        <div className="inner-list">
          {activities.map((activity, index) => (
            <div className="inner-list-item" key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{activity}</p>
            </div>
          ))}
        </div>
      </div>
    </InnerPage>
  );
}