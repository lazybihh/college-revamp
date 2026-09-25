import './Programs.css';

export default function Programs() {
  return (
    <section className="programs">
      <div className="programs-container">

        {/* Header */}
        <div className="programs-header">
          <div>
            <p className="programs-eyebrow">
              OUR PROGRAMMES
            </p>

            <h2>Academic Programmes</h2>

            <p className="programs-subtitle">
              Nurturing future educators through quality teacher
              education programmes.
            </p>
          </div>

          <a href="/courses-offered" className="programs-view">
            View All Courses <span>→</span>
          </a>
        </div>

        {/* Programmes */}
        <div className="programs-list">

          {/* B.Ed. */}
          <article className="program program-bed">

            <div className="program-number">
              <span>01</span>
              <i></i>
            </div>

            <div className="program-image">
              <img
                src="/images/bed.jpg"
                alt="B.Ed. programme"
              />
            </div>

            <div className="program-content">
              <h3>B.Ed.</h3>

              <p className="program-meta">
                BACHELOR OF EDUCATION
                <span>·</span>
                100 SEATS
              </p>

              <div className="program-line"></div>

              <p className="program-description">
                Build a strong foundation in education theory,
                practical teaching and classroom engagement.
              </p>

              <a href="/courses-offered" className="program-link">
                EXPLORE PROGRAMME <span>→</span>
              </a>
            </div>

          </article>

          {/* M.Ed. */}
          <article className="program program-med">

            <div className="program-number">
              <span>02</span>
              <i></i>
            </div>

            <div className="program-image">
              <img
                src="/images/med.jpg"
                alt="M.Ed. programme"
              />
            </div>

            <div className="program-content">
              <h3>M.Ed.</h3>

              <p className="program-meta">
                MASTER OF EDUCATION
                <span>·</span>
                50 SEATS
              </p>

              <div className="program-line"></div>

              <p className="program-description">
                Deepen your expertise, enhance your research skills
                and lead with confidence in the field of education.
              </p>

              <a href="/courses-offered" className="program-link">
                EXPLORE PROGRAMME <span>→</span>
              </a>
            </div>

            <div className="program-decoration">
              <span></span>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
}