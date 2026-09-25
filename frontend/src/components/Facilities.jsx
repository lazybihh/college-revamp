import "./Facilities.css";

const facilities = [
  {
    name: "Classrooms",
    image: "/images/classroom.jpg",
    link: "/class-rooms",
    text: "Spacious, well-equipped and conducive to learning.",
  },
  {
    name: "Laboratories",
    image: "/images/laboratory.jpg",
    link: "/laboratories",
    text: "Hands-on learning with modern technology.",
  },
  {
    name: "Sports",
    image: "/images/sports.jpg",
    link: "/sports-facilities",
    text: "Stay active, stay healthy, stay inspired.",
  },
  {
    name: "Student Activities",
    image: "/images/student-activities.jpg",
    link: "/student-activities",
    text: "Explore interests and build lifelong connections.",
  },
];

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

          {/* Main facility */}
          <a href="/library-facility" className="facility-main">
            <img src="/images/library.jpg" alt="Library" />

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

          {/* Other facilities */}
          <div className="facility-list">

            {facilities.map((facility) => (
              <a
                href={facility.link}
                className="facility-card"
                key={facility.name}
              >
                <img src={facility.image} alt={facility.name} />

                <div className="facility-overlay">
                  <span className="facility-line"></span>

                  <h3>{facility.name}</h3>

                  <p>{facility.text}</p>

                  <span className="facility-arrow">→</span>
                </div>
              </a>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}