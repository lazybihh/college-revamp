import InnerPage from "../../components/InnerPage";

export default function LanguageLab() {
  return (
    <InnerPage
      eyebrow="CAMPUS FACILITIES"
      title="Language Lab"
      description="A dedicated learning environment for developing communication, language and practical teaching skills."
      breadcrumb={["Facilities", "Language Lab"]}
      sidebarTitle="Facilities"
      activeLink="Language Lab"
      heroImage="/images/language-lab.jpg"
      sidebarLinks={[
        { label: "Class Rooms", href: "/class-rooms" },
        { label: "ICT Center", href: "/ict-center" },
        { label: "Library Facility", href: "/library-facility" },
        { label: "Home Science Lab", href: "/home-science-lab" },
        { label: "Language Lab", href: "/language-lab" },
        { label: "Psychology Lab", href: "/psychology-lab" },
        {
          label: "Science & Mathematics Lab",
          href: "/science-and-mathematics-lab",
        },
        { label: "Sports Facilities", href: "/sports-facilities" },
        { label: "Women Cell", href: "/women-cell" },
        { label: "Other Facilities", href: "/other-facilities" },
      ]}
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">LANGUAGE & COMMUNICATION</span>
        <h2>
          Building confidence through <em>communication.</em>
        </h2>
      </div>

      <div className="facility-feature">
        <div className="facility-feature-image">
          <img
            src="/images/language-lab.jpg"
            alt="Language Lab at Chhotu Ram College of Education"
          />

          <div className="facility-image-label">
            <span>05</span>
            <strong>LANGUAGE LAB</strong>
          </div>
        </div>

        <div className="facility-feature-content">
          <span className="facility-small-label">COMMUNICATION SKILLS</span>

          <h3>
            A practical space for developing effective language skills.
          </h3>

          <p>
            Language learning forms an important part of teacher preparation.
            The Language Lab provides a dedicated environment where students
            can work on communication and language-related activities.
          </p>

          <p>
            The college's institutional material also identifies functional use
            of the Language Lab among its co-curricular and academic
            activities.
          </p>

          <div className="facility-stat">
            <strong>05</strong>
            <span>Dedicated language learning facility</span>
          </div>
        </div>
      </div>

      <div className="facility-copy">
        <h3>Preparing teachers who can communicate clearly.</h3>

        <p>
          Effective communication is fundamental to classroom teaching.
          Practical language activities can help future educators develop
          confidence in expressing ideas, interacting with learners and
          presenting academic content.
        </p>

        <p>
          The facility complements the college's broader teacher-education
          environment by giving language development a dedicated place within
          campus learning.
        </p>
      </div>
    </InnerPage>
  );
}