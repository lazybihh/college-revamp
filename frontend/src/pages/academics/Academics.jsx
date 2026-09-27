import InnerPage from "../../components/InnerPage";

const academicLinks = [
  { label: "Academics", href: "/academics" },
  { label: "Courses Offered", href: "/courses-offered" },
  { label: "Time Table", href: "/time-table" },
  { label: "Academic Calendar", href: "/academic-calendar" },
  { label: "Examination Facility", href: "/examination-facility" },
  {
    label: "Student Satisfaction Survey",
    href: "/student-satisfaction-survey",
  },
  { label: "Result", href: "/result" },
];

export default function Academics() {
  return (
    <InnerPage
      eyebrow="ACADEMICS"
      title="Academics"
      description="Academic programmes and learning opportunities at Chhotu Ram College of Education."
      breadcrumb={["Academics"]}
      sidebarTitle="Academics"
      sidebarLinks={academicLinks}
      activeLink="Academics"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          EDUCATION & EXCELLENCE
        </span>

        <h2>
          Preparing educators for a <em>changing world.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Education today is global in perspective and practice. Teachers
          and students need to remain aware of developments in their areas
          of specialization and related fields.
        </p>
      </div>

      <p>
        Chhotu Ram College of Education welcomes students with a good
        academic track record and endeavours to mould their character,
        transform their personality and equip them with the skills required
        for the educational field.
      </p>

      <p>
        The college is dedicated to quality education and excellence in
        academic pursuits in the field of teaching. Its academic approach
        aims to prepare high-calibre professionals for the growing needs of
        education.
      </p>

      <h3>Academic Environment</h3>

      <p>
        The college provides spacious classrooms and modern computer
        laboratory facilities as part of its academic infrastructure.
      </p>

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>1951</strong>
          <span>B.T. Started</span>
        </div>

        <div className="inner-fact">
          <strong>1955</strong>
          <span>B.Ed. Started</span>
        </div>

        <div className="inner-fact">
          <strong>2</strong>
          <span>Current Programmes</span>
        </div>
      </div>

      <h3>Academic Focus</h3>

      <div className="objective-list">
        <div className="objective-item">
          <span className="objective-number">01</span>
          <p>Quality teacher education</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">02</span>
          <p>Professional development</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">03</span>
          <p>Character and personality development</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">04</span>
          <p>Academic and professional skills</p>
        </div>
      </div>
    </InnerPage>
  );
}