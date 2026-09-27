import "./Facilities.css";

export default function Facilities() {
  return (
    <section className="facilities">
      <div className="facilities-content">

        <div className="facilities-header">

          <div className="facilities-heading">
            <p className="facilities-eyebrow">
              CAMPUS & FACILITIES
            </p>

            <h2>
              Spaces that support
              <span> learning and growth.</span>
            </h2>

            <p className="facilities-sub">
              A thoughtfully equipped campus designed to support
              academic learning, creativity, activity and student life.
            </p>
          </div>

          <a
            href="/facilities"
            className="facilities-btn"
          >
            <span>Explore All Facilities</span>
            <strong>↗</strong>
          </a>

        </div>

        <div className="facilities-grid">

          {/* LIBRARY */}

          <a
            href="/library-facility"
            className="facility-feature"
          >
            <div className="facility-image">

              <img
                src="/images/library.jpg"
                alt="Library"
              />

              <div className="facility-image-overlay"></div>

              <div className="facility-icon">
                ⌑
              </div>

              <span className="facility-number">
                01
              </span>

            </div>

            <div className="facility-feature-content">

              <div className="facility-feature-copy">

                <span className="facility-line"></span>

                <h3>Library</h3>

                <p>
                  Knowledge, resources and a quiet space
                  to explore ideas and grow.
                </p>

              </div>

              <span className="facility-link">
                Learn More
                <b>↗</b>
              </span>

            </div>
          </a>

          {/* SMALL FACILITIES */}

          <div className="facility-cards">

            {/* CLASSROOMS */}

            <a
              href="/class-rooms"
              className="facility-card"
            >
              <div className="facility-card-image">

                <img
                  src="/images/classroom.jpg"
                  alt="Classrooms"
                />

                <div className="facility-image-overlay"></div>

                <div className="facility-icon small">
                  ◇
                </div>

              </div>

              <div className="facility-card-content">

                <div>
                  <span className="facility-line"></span>

                  <h3>Classrooms</h3>

                  <p>
                    Spacious, well-equipped spaces
                    designed for meaningful learning.
                  </p>
                </div>

                <span className="facility-circle">
                  ↗
                </span>

              </div>
            </a>

            {/* LABORATORIES */}

            <a
              href="/laboratories"
              className="facility-card"
            >
              <div className="facility-card-image">

                <img
                  src="/images/laboratory.jpg"
                  alt="Laboratories"
                />

                <div className="facility-image-overlay"></div>

                <div className="facility-icon pink small">
                  △
                </div>

              </div>

              <div className="facility-card-content">

                <div>
                  <span className="facility-line"></span>

                  <h3>Laboratories</h3>

                  <p>
                    Hands-on learning supported by
                    practical resources and technology.
                  </p>
                </div>

                <span className="facility-circle">
                  ↗
                </span>

              </div>
            </a>

            {/* SPORTS */}

            <a
              href="/sports-facilities"
              className="facility-card"
            >
              <div className="facility-card-image">

                <img
                  src="/images/sports.jpg"
                  alt="Sports"
                />

                <div className="facility-image-overlay"></div>

                <div className="facility-icon small">
                  ↗
                </div>

              </div>

              <div className="facility-card-content">

                <div>
                  <span className="facility-line"></span>

                  <h3>Sports</h3>

                  <p>
                    Spaces that encourage activity,
                    wellbeing and team spirit.
                  </p>
                </div>

                <span className="facility-circle">
                  ↗
                </span>

              </div>
            </a>

            {/* STUDENT ACTIVITIES */}

            <a
              href="/student-activities"
              className="facility-card"
            >
              <div className="facility-card-image">

                <img
                  src="/images/student-activities.jpg"
                  alt="Student Activities"
                />

                <div className="facility-image-overlay"></div>

                <div className="facility-icon pink small">
                  +
                </div>

              </div>

              <div className="facility-card-content">

                <div>
                  <span className="facility-line"></span>

                  <h3>Student Activities</h3>

                  <p>
                    Opportunities to explore interests,
                    skills and meaningful connections.
                  </p>
                </div>

                <span className="facility-circle">
                  ↗
                </span>

              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}