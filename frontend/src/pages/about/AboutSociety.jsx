import InnerPage from "../../components/InnerPage";

const aboutLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Inspiration", href: "/our-inspiration" },
  { label: "About Society", href: "/about-society" },
  { label: "Panchayat System", href: "/panchayat-system" },
  { label: "Vision & Mission", href: "/visionmission" },
  { label: "From The Desk of Principal", href: "/from-the-desk-of-principal" },
];

export default function AboutSociety() {
  return (
    <InnerPage
      eyebrow="ABOUT THE SOCIETY"
      title="About Society"
      description="The history, purpose and educational institutions of Jat Education Society, Rohtak."
      breadcrumb={["About Us", "About Society"]}
      sidebarTitle="About CRCOE"
      sidebarLinks={aboutLinks}
      activeLink="About Society"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          JAT EDUCATION SOCIETY
        </span>

        <h2>
          A legacy built around <em>education.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Jat Education Society, Rohtak is an educational society registered
          under the Societies Registration Act XXI of 1860.
        </p>
      </div>

      <p>
        The society was formed in 1914 under the name of Jat Anglo Sanskrit
        High School, Rohtak, with the prime objective of serving the cause
        of education.
      </p>

      <p>
        In 1927, the institution changed its name to Jat Heroes Memorial
        Anglo Sanskrit High School, Rohtak. The name of the society was
        later changed to Jat Education Society, Rohtak in 1977.
      </p>

      <h3>Educational Legacy</h3>

      <p>
        The society has continued its educational mission through a number
        of institutions serving students across different fields of
        education.
      </p>

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>1914</strong>
          <span>Society Established</span>
        </div>

        <div className="inner-fact">
          <strong>1977</strong>
          <span>Present Name Adopted</span>
        </div>

        <div className="inner-fact">
          <strong>9</strong>
          <span>Institutions</span>
        </div>
      </div>

      <h3>Institutions of the Society</h3>

      <p>
        The society is presently associated with nine educational
        institutions:
      </p>

      <div className="objective-list">
        <div className="objective-item">
          <span className="objective-number">01</span>
          <p>Chhotu Ram College of Education, Rohtak</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">02</span>
          <p>Jat HAMS High School, Rohtak</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">03</span>
          <p>Jat Senior Secondary Schools, Rohtak</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">04</span>
          <p>Chhotu Ram Memorial Public School, Rohtak</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">05</span>
          <p>All India Jat Heroes Memorial Degree College, Rohtak</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">06</span>
          <p>M.K.J.K. Degree College, Rohtak</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">07</span>
          <p>Chhotu Ram Polytechnic College, Rohtak</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">08</span>
          <p>Matu Ram Institute of Engineering and Management, Rohtak</p>
        </div>

        <div className="objective-item">
          <span className="objective-number">09</span>
          <p>C.R. Institute of Law, Rohtak</p>
        </div>
      </div>
    </InnerPage>
  );
}