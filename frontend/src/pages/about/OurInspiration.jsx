import InnerPage from "../../components/InnerPage";

const aboutLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Inspiration", href: "/our-inspiration" },
  { label: "About Society", href: "/about-society" },
  { label: "Panchayat System", href: "/panchayat-system" },
  { label: "Vision & Mission", href: "/visionmission" },
  { label: "From The Desk of Principal", href: "/from-the-desk-of-principal" },
];

export default function OurInspiration() {
  return (
    <InnerPage
      eyebrow="OUR INSPIRATION"
      title="Our Inspiration"
      description="Remembering the life, vision and contribution of Deenbandhu Sir Chhotu Ram."
      breadcrumb={["About Us", "Our Inspiration"]}
      sidebarTitle="About CRCOE"
      sidebarLinks={aboutLinks}
      activeLink="Our Inspiration"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          DEENBANDHU SIR CHHOTU RAM
        </span>

        <h2>
          A legacy of <em>reform and education.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Deenbandhu Sir Chhotu Ram was born on 24th November 1881 in
          Garhi Sampla, a village in the old Rohtak district.
        </p>
      </div>

      <p>
        Deenbandhu Sir Chhotu Ram was an educationist and was closely
        associated with the reform and development of the farming community.
      </p>

      <p>
        After completing his law graduation, he established the Jat Anglo
        Sansthan on 26th March 1913. He later served in important public
        positions and contributed to educational, agricultural and
        developmental initiatives.
      </p>

      <h3>Life & Contributions</h3>

      <p>
        He served as President of the Congress from 1916 to 1919 and formed
        the Unionist Party in 1923. He served as Agriculture Minister from
        1924 to 1926 and later as Development Minister from 1937 to 1945.
      </p>

      <p>
        His contributions to the development of the region included work
        associated with major agricultural and development policies in
        joint Punjab, including the Bhakra Project.
      </p>

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>1881</strong>
          <span>Year of Birth</span>
        </div>

        <div className="inner-fact">
          <strong>1913</strong>
          <span>Jat Anglo Sansthan</span>
        </div>

        <div className="inner-fact">
          <strong>1945</strong>
          <span>Year of Passing</span>
        </div>
      </div>

      <h3>Honours & Recognition</h3>

      <p>
        His public contributions were recognised through honours including
        Rai Bahadur in 1919, Deenbandhu in 1942 and Rehbar-e-Azam in 1944.
      </p>
    </InnerPage>
  );
}