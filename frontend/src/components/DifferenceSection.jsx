import "./DifferenceSection.css";

export default function DifferenceSection() {
  return (
    <section className="difference">
      <div className="difference-inner">

        <div className="difference-top">

          <div className="difference-intro">
            <span className="difference-eyebrow">
              THE CRCOE DIFFERENCE
            </span>

            <h2>
              Education rooted
              <br />
              in legacy.
              <em>Designed for tomorrow.</em>
            </h2>

            <p>
              A tradition of teacher education built on knowledge,
              values and professional excellence.
            </p>

            <div className="difference-mini-info">
              <div>
                <span>EST.</span>
                <strong>1951</strong>
              </div>

              <div>
                <span>PLACE</span>
                <strong>Rohtak</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>Education</strong>
              </div>
            </div>
          </div>

          <div className="difference-campus">
            <img
              src="/images/crcoe-campus.jpg"
              alt="Chhotu Ram College of Education campus"
            />

            <div className="difference-campus-note">
              <span>SINCE</span>
              <strong>1951</strong>
              <small>Chhotu Ram College of Education</small>
            </div>
          </div>

        </div>

        <div className="difference-main">

          <div className="difference-legacy">

            <div className="difference-section-head">
              <span>01</span>

              <div>
                <small>OUR LEGACY</small>
                <h3>1951 — Present</h3>
              </div>
            </div>

            <p>
              For generations, Chhotu Ram College of Education has been
              preparing educators through meaningful learning, professional
              development and strong values.
            </p>

            <div className="difference-legacy-content">

              <div className="difference-classroom">
                <img
                  src="/images/crcoe-classroom.jpg"
                  alt="Students at Chhotu Ram College of Education"
                />
              </div>

              <div className="difference-facts">

                <div>
                  <span>01</span>
                  <strong>Legacy</strong>
                  <small>
                    A foundation built over generations.
                  </small>
                </div>

                <div>
                  <span>02</span>
                  <strong>Values</strong>
                  <small>
                    Learning with responsibility and purpose.
                  </small>
                </div>

                <div>
                  <span>03</span>
                  <strong>Progress</strong>
                  <small>
                    Preparing educators for tomorrow.
                  </small>
                </div>

              </div>
            </div>

            <a href="/about-us" className="difference-link">
              Discover our story
              <span>↗</span>
            </a>

          </div>

          <div className="difference-approach">

            <div className="difference-section-head">
              <span>02</span>

              <div>
                <small>OUR APPROACH</small>
                <h3>Knowledge + Values</h3>
              </div>
            </div>

            <p>
              We believe great educators are shaped through meaningful
              learning, professional confidence and a strong sense
              of responsibility.
            </p>

            <div className="difference-pillars">

              <div className="difference-pillar">
                <span>01</span>

                <div>
                  <strong>Purposeful learning</strong>
                  <small>
                    Building skills for real-world impact.
                  </small>
                </div>
              </div>

              <div className="difference-pillar">
                <span>02</span>

                <div>
                  <strong>Professional confidence</strong>
                  <small>
                    Through guidance, practice and support.
                  </small>
                </div>
              </div>

              <div className="difference-pillar">
                <span>03</span>

                <div>
                  <strong>Responsible leadership</strong>
                  <small>
                    For a more thoughtful tomorrow.
                  </small>
                </div>
              </div>

            </div>

            <div className="difference-note">
              Better educators.
              <br />
              <em>Brighter futures.</em>
            </div>

          </div>

        </div>

        <div className="difference-glance">

          <div className="difference-glance-title">
            <span>AT A GLANCE</span>
            <small>A few things that define CRCOE.</small>
          </div>

          <div className="difference-glance-item">
            <span>ESTABLISHED</span>
            <strong>1951</strong>
          </div>

          <div className="difference-glance-item">
            <span>LOCATION</span>
            <strong>Rohtak</strong>
          </div>

          <div className="difference-glance-item">
            <span>INSTITUTION</span>
            <strong>CRCOE</strong>
          </div>

          <div className="difference-glance-item">
            <span>FOCUS</span>
            <strong>Teacher Education</strong>
          </div>

          <div className="difference-glance-item">
            <span>IDENTITY</span>
            <strong>Learning + Values</strong>
          </div>

        </div>

      </div>
    </section>
  );
}