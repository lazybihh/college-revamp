import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-top">

        <div className="about-image-column">
          <span className="about-image-index">01 / 04</span>
          <div className="about-image-wrap">
            <img
              src="/images/campus-wide.jpg"
              alt="Chhotu Ram College of Education campus"
            />

            <div className="about-image-label">
              <span>EST. 1951</span>
              <span>ROHTAK, HARYANA</span>
            </div>
          </div>
          <div className="about-heritage-card">
            <span className="about-heritage-mark">CR</span>
            <div>
              <strong>A tradition of purpose</strong>
              <span>Education rooted in service</span>
            </div>
          </div>
        </div>

        <div className="about-content">

          <span className="about-eyebrow">
            WELCOME TO CRCOE
          </span>

          <h2>
            Shaping educators.
            <span>Inspiring generations.</span>
          </h2>

          <p className="about-lead">
            Chhotu Ram College of Education, Rohtak is one of the
            premier institutions of Haryana, carrying a long-standing
            tradition of teacher education and professional excellence.
          </p>

          <p className="about-description">
            B.T. class was started in 1951 and B.Ed. in 1955 under the
            patronage of Ch. Uday Mann and Sh. S.S. Gill. Since then,
            the institution has remained committed to preparing
            knowledgeable, responsible and capable educators.
          </p>

          <blockquote className="about-quote">
            <span className="about-quote-mark">“</span>
            <p>Every capable teacher becomes a quiet force for generations.</p>
          </blockquote>

          <a href="/about-us" className="about-button">
            <span>Discover our story</span>
            <span aria-hidden="true">↗</span>
          </a>

        </div>

      </div>

      <div className="about-facts">

        <div className="about-fact-intro">
          <span>AT A GLANCE</span>
          <p>
            A legacy built around education, values and
            professional growth.
          </p>
        </div>

        <div className="about-fact">
          <strong>69<span>+</span></strong>
          <small>Years of legacy</small>
        </div>

        <div className="about-fact">
          <strong>1951</strong>
          <small>Established</small>
        </div>

        <div className="about-fact">
          <strong>02</strong>
          <small>Academic programmes</small>
        </div>

        <div className="about-fact">
          <strong>150</strong>
          <small>Total seats</small>
        </div>

      </div>

    </section>
  );
}