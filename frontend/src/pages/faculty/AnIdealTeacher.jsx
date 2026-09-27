import InnerPage from "../../components/InnerPage";

export default function AnIdealTeacher() {
  return (
    <InnerPage
      eyebrow="FACULTY"
      title="An Ideal Teacher"
      description="The qualities, values and responsibilities that shape an inspiring teacher."
      breadcrumb={["Faculty", "An Ideal Teacher"]}
      sidebarTitle="Faculty"
      activeLink="An Ideal Teacher"
      heroImage="/images/campus-wide.jpg"
      sidebarLinks={[
        {
          label: "An Ideal Teacher",
          href: "/an-ideal-teacher",
        },
        {
          label: "Teaching Staff",
          href: "/teaching-staff",
        },
        {
          label: "Non-Teaching Staff",
          href: "/non-teaching-staff",
        },
      ]}
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">THE IDEAL TEACHER</span>

        <h2>
          Teaching with <em>knowledge, values</em> and purpose.
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          An ideal teacher does more than deliver lessons. A teacher inspires
          curiosity, develops confidence and helps students become responsible
          individuals.
        </p>
      </div>

      <p>
        Teaching is a profession built on knowledge, patience, responsibility
        and continuous learning. An effective teacher understands the needs of
        learners and creates an environment where every student can participate,
        learn and grow.
      </p>

      <h3>Qualities of an Ideal Teacher</h3>

      <p>
        An ideal teacher combines professional knowledge with empathy,
        communication and commitment. These qualities help teachers create
        meaningful learning experiences and become positive role models for
        their students.
      </p>

      <div className="inner-objectives">
        <div className="inner-objectives-title">
          <span>01</span>
          <h3>Core Qualities</h3>
        </div>

        <div className="objective-list">
          <div className="objective-item">
            <span className="objective-number">01 / KNOWLEDGE</span>
            <p>
              Strong subject knowledge supported by continuous learning and
              professional development.
            </p>
          </div>

          <div className="objective-item">
            <span className="objective-number">02 / EMPATHY</span>
            <p>
              Understanding students as individuals and responding to their
              different learning needs with patience.
            </p>
          </div>

          <div className="objective-item">
            <span className="objective-number">03 / LEADERSHIP</span>
            <p>
              Guiding students through positive example, responsible behaviour
              and constructive encouragement.
            </p>
          </div>

          <div className="objective-item">
            <span className="objective-number">04 / INSPIRATION</span>
            <p>
              Creating curiosity and encouraging students to think,
              participate and develop confidence.
            </p>
          </div>
        </div>
      </div>
    </InnerPage>
  );
}