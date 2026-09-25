import './DifferenceSection.css';

export default function DifferenceSection() {
  return (
    <section className="difference">
      <div className="difference-inner">

        <div className="difference-top">

          <div className="difference-intro">
            <div className="difference-meta">
              <span className="difference-eyebrow">
                THE CRCOE DIFFERENCE
              </span>

              <span className="difference-index">
                01 — 03
              </span>
            </div>

            <h2>
              Education rooted
              <br />
              in legacy.
              <span>Designed for tomorrow.</span>
            </h2>

            <p className="difference-intro-text">
              At Chhotu Ram College of Education, we combine a rich legacy
              of academic excellence with a forward-thinking approach to
              building educators who create a better tomorrow.
            </p>
          </div>

          <div className="difference-visual">
            <div className="difference-image-wrap">
              <img
                src="/images/crcoe-campus.jpg"
                alt="Chhotu Ram College of Education campus"
              />
            </div>

            <div className="difference-image-accent"></div>

            <span className="difference-since">
              Since 1951
            </span>
          </div>

        </div>

        <div className="difference-main">

          <div className="difference-legacy">

            <div className="difference-section-label">
              <span>01</span>
              <i></i>
              OUR LEGACY
            </div>

            <h3>1951 — Present</h3>

            <p>
              For generations, Chhotu Ram College of Education has been
              preparing educators with a foundation built on knowledge,
              values and professional excellence.
            </p>

            <a href="/about-us" className="difference-link">
              <span>Discover our story</span>
              <strong>→</strong>
            </a>

            <div className="difference-small-visual">
              <img
                src="/images/crcoe-classroom.jpg"
                alt="Students at Chhotu Ram College of Education"
              />

              <div className="difference-caption">
                <span></span>
                <p>
                  A legacy of learning,
                  <br />
                  a future of leaders.
                </p>
              </div>
            </div>

          </div>

          <div className="difference-approach">

            <div className="difference-section-label">
              <span>02</span>
              <i></i>
              OUR APPROACH
            </div>

            <h3>Knowledge + Values</h3>

            <p>
              We believe great educators are shaped through meaningful
              learning, professional development and a strong sense of
              responsibility.
            </p>

            <ul className="difference-pillars">

              <li>
                <span>01</span>
                <div>
                  <strong>Purposeful learning</strong>
                  <small>
                    Building skills for real-world impact.
                  </small>
                </div>
              </li>

              <li>
                <span>02</span>
                <div>
                  <strong>Professional confidence</strong>
                  <small>
                    Through guidance, practice and support.
                  </small>
                </div>
              </li>

              <li>
                <span>03</span>
                <div>
                  <strong>Responsible leadership</strong>
                  <small>
                    For a more thoughtful tomorrow.
                  </small>
                </div>
              </li>

            </ul>

            <div className="difference-side-note">
              <span>Better educators.</span>
              <span>Brighter futures.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}