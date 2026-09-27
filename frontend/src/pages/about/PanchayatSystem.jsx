import InnerPage from "../../components/InnerPage";

const aboutLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Inspiration", href: "/our-inspiration" },
  { label: "About Society", href: "/about-society" },
  { label: "Panchayat System", href: "/panchayat-system" },
  { label: "Vision & Mission", href: "/visionmission" },
  { label: "From The Desk of Principal", href: "/from-the-desk-of-principal" },
];

export default function PanchayatSystem() {
  return (
    <InnerPage
      eyebrow="STUDENT PARTICIPATION"
      title="Panchayat System"
      description="Encouraging student participation, leadership and responsibility through Chhatra Panchayat and clubs."
      breadcrumb={["About Us", "Panchayat System"]}
      sidebarTitle="About CRCOE"
      sidebarLinks={aboutLinks}
      activeLink="Panchayat System"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          CHHATRA PANCHAYAT
        </span>

        <h2>
          Learning through <em>participation.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          The Chhatra Panchayat and student clubs provide opportunities for
          students to participate actively in the activities and programmes
          of the institution.
        </p>
      </div>

      <p>
        A three-day orientation programme is organised for newly inducted
        B.Ed. and M.Ed. students. The programme helps students become
        familiar with the activities and programmes of the college.
      </p>

      <p>
        At the beginning of the session, Chhatra Panchayat and various clubs
        are formed. Students work with faculty members in planning,
        organising and executing different activities of the institution.
      </p>

      <h3>Developing Student Leadership</h3>

      <p>
        Through the Chhatra Panchayat and method clubs, students get
        opportunities to develop cooperation, leadership, creativity,
        decision-making and self-confidence.
      </p>

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>01</strong>
          <span>Student Panchayat</span>
        </div>

        <div className="inner-fact">
          <strong>03</strong>
          <span>Orientation Days</span>
        </div>

        <div className="inner-fact">
          <strong>∞</strong>
          <span>Learning Opportunities</span>
        </div>
      </div>

      <h3>Values & Skills</h3>

      <div className="objective-list">
        <div className="objective-item">
          <span className="objective-number">01</span>
          <p>Cooperation and teamwork</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">02</span>
          <p>Leadership and decision making</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">03</span>
          <p>Creativity and advancement of knowledge</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">04</span>
          <p>Self-confidence and social values</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">05</span>
          <p>Sharing and self-disclosure</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">06</span>
          <p>Dignity towards manual work</p>
        </div>
      </div>
    </InnerPage>
  );
}