import "./Facilities.css";

export default function Facilities() {
  return (
    <section className="facilities">

      <div className="facilities-content">

        <p className="facilities-eyebrow">
          CAMPUS & FACILITIES
        </p>

        <h2>
          Modern Infrastructure for
          <br />
          Holistic Development
        </h2>

        <p className="facilities-sub">
          We provide a vibrant campus with state-of-the-art
          facilities to support academic, co-curricular and
          personal growth.
        </p>

        <a href="/facilities" className="facilities-btn">
          Explore All Facilities <span>→</span>
        </a>

        <div className="facilities-grid">

          {/* Library */}
          <a href="/library-facility" className="facility-main">
            <img
              src="/images/library.jpg"
              alt="Library"
            />

            <div className="facility-overlay">
              <span className="facility-line"></span>

              <h3>Library</h3>

              <p>
                Knowledge, resources and a quiet space
                to grow your ideas.
              </p>

              <span className="facility-arrow">→</span>
            </div>
          </a>

          <div className="facility-list">

            {/* Classrooms */}
            <a
              href="/class-rooms"
              className="facility-card"
            >
              <img
                src="/images/classroom.jpg"
                alt="Classrooms"
              />

              <div className="facility-overlay">
                <span className="facility-line"></span>

                <h3>Classrooms</h3>

                <p>
                  Spacious, well-equipped and conducive to learning.
                </p>

                <span className="facility-arrow">→</span>
              </div>
            </a>

            {/* Laboratories */}
            <a
              href="/laboratories"
              className="facility-card"
            >
              <img
                src="/images/laboratory.jpg"
                alt="Laboratories"
              />

              <div className="facility-overlay">
                <span className="facility-line"></span>

                <h3>Laboratories</h3>

                <p>
                  Hands-on learning with modern technology.
                </p>

                <span className="facility-arrow">→</span>
              </div>
            </a>

            {/* Sports */}
            <a
              href="/sports-facilities"
              className="facility-card"
            >
              <img
                src="/images/sports.jpg"
                alt="Sports"
              />

              <div className="facility-overlay">
                <span className="facility-line"></span>

                <h3>Sports</h3>

                <p>
                  Stay active, stay healthy, stay inspired.
                </p>

                <span className="facility-arrow">→</span>
              </div>
            </a>

            {/* Student Activities */}
            <a
              href="/student-activities"
              className="facility-card"
            >
              <img
                src="/images/student-activities.jpg"
                alt="Student Activities"
              />

              <div className="facility-overlay">
                <span className="facility-line"></span>

                <h3>Student Activities</h3>

                <p>
                  Explore interests and build lifelong connections.
                </p>

                <span className="facility-arrow">→</span>
              </div>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}