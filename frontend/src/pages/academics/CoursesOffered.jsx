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

export default function CoursesOffered() {
  return (
    <InnerPage
      eyebrow="ACADEMIC PROGRAMMES"
      title="Courses Offered"
      description="Explore the teacher education programmes offered by Chhotu Ram College of Education."
      breadcrumb={["Academics", "Courses Offered"]}
      sidebarTitle="Academics"
      sidebarLinks={academicLinks}
      activeLink="Courses Offered"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          PROGRAMMES
        </span>

        <h2>
          Courses designed for <em>future educators.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Chhotu Ram College of Education currently offers teacher education
          programmes at B.Ed. and M.Ed. levels.
        </p>
      </div>

      <h3>B.Ed.</h3>

      <p>
        The Bachelor of Education programme has an intake of 100 seats. The
        admission process is centralized and students are admitted on the
        basis of merit. Counselling is conducted by M.D. University.
      </p>

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>100</strong>
          <span>B.Ed. Seats</span>
        </div>

        <div className="inner-fact">
          <strong>Merit</strong>
          <span>Admission Basis</span>
        </div>

        <div className="inner-fact">
          <strong>MDU</strong>
          <span>Counselling</span>
        </div>
      </div>

      <h3>M.Ed.</h3>

      <p>
        The Master of Education programme has an intake of 50 seats. The
        admission process is centralized and students are admitted on the
        basis of B.Ed. merit.
      </p>

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>50</strong>
          <span>M.Ed. Seats</span>
        </div>

        <div className="inner-fact">
          <strong>B.Ed.</strong>
          <span>Eligibility Basis</span>
        </div>

        <div className="inner-fact">
          <strong>01</strong>
          <span>Postgraduate Programme</span>
        </div>
      </div>
    </InnerPage>
  );
}