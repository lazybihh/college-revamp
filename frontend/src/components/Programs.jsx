import "./Programs.css";

export default function Programs() {
  return (
    <section className="programs">
      <div className="programs-bg-shape programs-bg-one"></div>
      <div className="programs-bg-shape programs-bg-two"></div>

      <div className="programs-container">

        <div className="programs-heading">
          <p className="programs-eyebrow">
            <span></span>
            OUR PROGRAMMES
            <span></span>
          </p>

          <h2>
            Academic <em>Programmes</em>
          </h2>

          <p className="programs-subtitle">
            Nurturing future educators through quality teacher
            education programmes.
          </p>

          <a href="/courses-offered" className="programs-view">
            <span>View All Courses</span>
            <strong>↗</strong>
          </a>
        </div>

        <div className="programs-grid">

          {/* B.Ed. */}
          <article className="program-card program-bed">

            <div className="program-top">
              <span className="program-number">01</span>

              <span className="program-tag">
                <b>●</b>
                Shape Tomorrow
              </span>
            </div>

            <div className="program-image-wrap">
              <div className="program-image">
                <img
                  src="/images/bed.jpg"
                  alt="B.Ed. students"
                />
              </div>
            </div>

            <div className="program-info">
              <div className="program-icon">B</div>

              <div className="program-details">
                <h3>B.Ed.</h3>

                <p className="program-meta">
                  BACHELOR OF EDUCATION
                  <span>•</span>
                  <strong>100 SEATS</strong>
                </p>

                <div className="program-rule"></div>

                <p className="program-description">
                  Build a strong foundation in education theory,
                  practical teaching and classroom engagement.
                </p>

                <a
                  href="/courses-offered"
                  className="program-link"
                >
                  <span>EXPLORE PROGRAMME</span>
                  <strong>↗</strong>
                </a>
              </div>
            </div>

            <span className="program-note">
              Learn
              <br />
              Teach
              <br />
              Inspire
            </span>
          </article>

          {/* M.Ed. */}
          <article className="program-card program-med">

            <div className="program-top">
              <span className="program-number">02</span>

              <span className="program-tag">
                <b>●</b>
                Lead with Knowledge
              </span>
            </div>

            <div className="program-image-wrap">
              <div className="program-image">
                <img
                  src="/images/med.jpg"
                  alt="M.Ed. students"
                />
              </div>
            </div>

            <div className="program-info">
              <div className="program-icon">M</div>

              <div className="program-details">
                <h3>M.Ed.</h3>

                <p className="program-meta">
                  MASTER OF EDUCATION
                  <span>•</span>
                  <strong>50 SEATS</strong>
                </p>

                <div className="program-rule"></div>

                <p className="program-description">
                  Deepen your expertise, enhance your research skills
                  and lead with confidence in education.
                </p>

                <a
                  href="/courses-offered"
                  className="program-link"
                >
                  <span>EXPLORE PROGRAMME</span>
                  <strong>↗</strong>
                </a>
              </div>
            </div>

            <span className="program-note">
              Think
              <br />
              Lead
              <br />
              Inspire
            </span>
          </article>

        </div>
      </div>
    </section>
  );
}