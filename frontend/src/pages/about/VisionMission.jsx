import InnerPage from "../../components/InnerPage";

const aboutLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Inspiration", href: "/our-inspiration" },
  { label: "About Society", href: "/about-society" },
  { label: "Panchayat System", href: "/panchayat-system" },
  { label: "Vision & Mission", href: "/visionmission" },
  { label: "From The Desk of Principal", href: "/from-the-desk-of-principal" },
];

export default function VisionMission() {
  return (
    <InnerPage
      eyebrow="OUR DIRECTION"
      title="Vision & Mission"
      description="The vision and mission guiding the educational journey of Chhotu Ram College of Education."
      breadcrumb={["About Us", "Vision & Mission"]}
      sidebarTitle="About CRCOE"
      sidebarLinks={aboutLinks}
      activeLink="Vision & Mission"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          VISION
        </span>

        <h2>
          Inspiring minds to <em>create impact.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          To provide intellectual and moral leadership by igniting the mind
          of student teachers to realize their potential and make positive
          contribution leading to prosperity of education, society and
          nation at large.
        </p>
      </div>

      <h3>Mission</h3>

      <p>
        To provide educational opportunities to release the inherent
        capabilities of all student teachers to make them professionally
        competent, morally mature, socially sensitive, cooperative, ICT
        enabled, research oriented and globally awakened in a dynamic
        environment.
      </p>

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>01</strong>
          <span>Intellectual Leadership</span>
        </div>

        <div className="inner-fact">
          <strong>02</strong>
          <span>Moral Development</span>
        </div>

        <div className="inner-fact">
          <strong>03</strong>
          <span>Professional Growth</span>
        </div>
      </div>

      <h3>Our Educational Focus</h3>

      <div className="objective-list">
        <div className="objective-item">
          <span className="objective-number">01</span>
          <p>Professional competence</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">02</span>
          <p>Moral maturity</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">03</span>
          <p>Social sensitivity</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">04</span>
          <p>Cooperation and ICT enablement</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">05</span>
          <p>Research orientation</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">06</span>
          <p>Global awareness</p>
        </div>
      </div>
    </InnerPage>
  );
}