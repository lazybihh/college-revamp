import InnerPage from "../../components/InnerPage";

export default function AdmissionProcedure() {
  return (
    <InnerPage
      eyebrow="ADMISSIONS"
      title="Admission Procedure"
      description="Information about the admission process, eligibility and important requirements."
      breadcrumb={["Admission", "Admission Procedure"]}
      sidebarTitle="Admission"
      activeLink="Admission Procedure"
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
        <span className="inner-content-eyebrow">ADMISSION PROCESS</span>
        <h2>
          Begin your journey in <em>teacher education.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Chhotu Ram College of Education welcomes aspiring educators who wish
          to build a strong foundation in teaching, learning and professional
          development.
        </p>
      </div>

      <p>
        Admission to the teacher education programme is carried out according
        to the applicable rules, regulations and eligibility requirements of
        the concerned university and regulatory authorities.
      </p>

      <h3>Admission Process</h3>

      <p>
        Students seeking admission are required to follow the prescribed
        admission procedure and submit the necessary documents within the
        notified schedule. Candidates should carefully check the eligibility
        requirements and admission notifications before applying.
      </p>

      <div className="inner-objectives">
        <div className="inner-objectives-title">
          <span>01</span>
          <h3>Important Points</h3>
        </div>

        <div className="objective-list">
          <div className="objective-item">
            <span className="objective-number">01 / ELIGIBILITY</span>
            <p>
              Candidates must satisfy the prescribed eligibility requirements
              for admission to the programme.
            </p>
          </div>

          <div className="objective-item">
            <span className="objective-number">02 / APPLICATION</span>
            <p>
              Applicants should complete the admission process within the
              notified schedule and provide the required information.
            </p>
          </div>

          <div className="objective-item">
            <span className="objective-number">03 / DOCUMENTS</span>
            <p>
              Required academic and supporting documents should be submitted as
              specified during admission.
            </p>
          </div>

          <div className="objective-item">
            <span className="objective-number">04 / VERIFICATION</span>
            <p>
              Submitted details and documents are subject to verification
              according to the applicable admission rules.
            </p>
          </div>
        </div>
      </div>
    </InnerPage>
  );
}