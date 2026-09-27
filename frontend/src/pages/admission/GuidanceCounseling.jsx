import InnerPage from "../../components/InnerPage";

export default function GuidanceCounseling() {
  return (
    <InnerPage
      eyebrow="STUDENT SUPPORT"
      title="Guidance & Counseling"
      description="Supporting students through academic guidance, personal development and informed decision-making."
      breadcrumb={["Admission", "Guidance & Counseling Cell"]}
      sidebarTitle="Admission"
      activeLink="Guidance & Counseling Cell"
      heroImage="/images/campus-wide.jpg"
      sidebarLinks={[
        {
          label: "Admission Procedure",
          href: "/admission-procedure",
        },
        {
          label: "Guidance & Counseling Cell",
          href: "/guidancecounseling-cell",
        },
      ]}
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">GUIDANCE & COUNSELING CELL</span>
        <h2>
          Helping students move forward with <em>confidence.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Guidance and counseling form an important part of student support,
          helping learners understand their academic needs, strengths,
          interests and future opportunities.
        </p>
      </div>

      <p>
        The Guidance & Counseling Cell provides a supportive environment where
        students can discuss academic concerns, seek appropriate guidance and
        receive support for their personal and professional development.
      </p>

      <h3>Objectives</h3>

      <p>
        The cell aims to encourage students to make informed decisions,
        develop confidence and address challenges that may affect their
        academic and personal growth.
      </p>

      <div className="inner-objectives">
        <div className="inner-objectives-title">
          <span>01</span>
          <h3>Areas of Support</h3>
        </div>

        <div className="objective-list">
          <div className="objective-item">
            <span className="objective-number">01 / ACADEMIC</span>
            <p>
              Guidance related to academic progress, learning needs and
              educational development.
            </p>
          </div>

          <div className="objective-item">
            <span className="objective-number">02 / CAREER</span>
            <p>
              Support in understanding career possibilities and making
              informed educational choices.
            </p>
          </div>

          <div className="objective-item">
            <span className="objective-number">03 / PERSONAL</span>
            <p>
              A supportive environment for students facing personal or
              adjustment-related concerns.
            </p>
          </div>

          <div className="objective-item">
            <span className="objective-number">04 / DEVELOPMENT</span>
            <p>
              Encouraging confidence, communication, self-awareness and
              responsible decision-making.
            </p>
          </div>
        </div>
      </div>
    </InnerPage>
  );
}