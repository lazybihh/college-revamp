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

export default function ExaminationFacility() {
  return (
    <InnerPage
      eyebrow="EXAMINATION"
      title="Examination Facility"
      description="Examination facilities and assessment practices at Chhotu Ram College of Education."
      breadcrumb={["Academics", "Examination Facility"]}
      sidebarTitle="Academics"
      sidebarLinks={academicLinks}
      activeLink="Examination Facility"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          EXAMINATION & ASSESSMENT
        </span>

        <h2>
          A structured approach to <em>assessment.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          The college provides the required infrastructure and facilities
          for conducting university examinations, practical examinations
          and internal assessments.
        </p>
      </div>

      <p>
        Theory and practical examinations are conducted according to the
        guidelines issued by M.D. University, Rohtak. The college also
        conducts house examinations for both M.Ed. and B.Ed. programmes
        after completion of the syllabus and remedial teaching sessions.
      </p>

      <h3>Internal Assessment</h3>

      <p>
        Students are assessed through different academic activities
        including seminars, assignments, presentations, home assignments
        and situational tests.
      </p>

      <div className="objective-list">
        <div className="objective-item">
          <span className="objective-number">01</span>
          <h3>University Examinations</h3>
          <p>
            Theory and practical examinations are conducted according to
            university guidelines.
          </p>
        </div>

        <div className="objective-item">
          <span className="objective-number">02</span>
          <h3>House Examinations</h3>
          <p>
            House examinations are conducted for B.Ed. and M.Ed. students
            after completion of the syllabus.
          </p>
        </div>

        <div className="objective-item">
          <span className="objective-number">03</span>
          <h3>Internal Assessment</h3>
          <p>
            Assessment includes seminars, assignments, presentations and
            situational tests.
          </p>
        </div>

        <div className="objective-item">
          <span className="objective-number">04</span>
          <h3>Practical Examinations</h3>
          <p>
            Practical examinations are conducted according to the schedule
            provided by the affiliating university.
          </p>
        </div>
      </div>

      <h3>Programme Examination Schedule</h3>

      <p>
        For M.Ed., final theory examinations are generally conducted during
        April/May and December/January, with practical examinations
        scheduled according to M.D. University. B.Ed. final theory
        examinations are generally conducted during May/June, with
        practical examinations following the university schedule.
      </p>
    </InnerPage>
  );
}