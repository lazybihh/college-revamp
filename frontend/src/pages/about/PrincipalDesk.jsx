import InnerPage from "../../components/InnerPage";

const aboutLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Inspiration", href: "/our-inspiration" },
  { label: "About Society", href: "/about-society" },
  { label: "Panchayat System", href: "/panchayat-system" },
  { label: "Vision & Mission", href: "/visionmission" },
  {
    label: "From The Desk of Principal",
    href: "/from-the-desk-of-principal",
  },
];

export default function PrincipalDesk() {
  return (
    <InnerPage
      eyebrow="FROM THE DESK"
      title="Principal's Desk"
      description="A message from the Principal of Chhotu Ram College of Education."
      breadcrumb={["About Us", "From The Desk of Principal"]}
      sidebarTitle="About CRCOE"
      sidebarLinks={aboutLinks}
      activeLink="From The Desk of Principal"
      heroImage="/images/campus-wide.jpg"
    >
      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          MESSAGE FROM THE PRINCIPAL
        </span>

        <h2>
          Building a future through <em>education.</em>
        </h2>
      </div>

      <div className="principal-message-layout">
        <div className="principal-desk-image">
          <img
            src="/images/principal.jpg"
            alt="Principal of Chhotu Ram College of Education"
          />
        </div>

        <div className="principal-message-text">
          <p>
            I am pleased to announce that the management of Chhotu Ram
            College of Education has created a beautiful and upcoming
            institution to provide quality education and overall
            personality development of thousands of future nation
            builders in years to come.
          </p>

          <p>
            It will be our endeavour to impart world class education.
            May it rise to great heights and progress from strength to
            strength and be a beacon light in this area.
          </p>

          <div className="principal-quote">
            <p>
              “I am confident that the students would take the torch
              from their Alma Mater and light innumerable hearts all
              over the country and abroad.”
            </p>
          </div>
        </div>
      </div>

      <div className="principal-signature">
        <strong>Dr. Sunita Arya</strong>
        <span>
          Principal · Chhotu Ram College of Education
        </span>
      </div>
    </InnerPage>
  );
}