import InnerPage from "../../components/InnerPage.jsx";

const aboutLinks = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Our Inspiration",
    href: "/our-inspiration",
  },
  {
    label: "About Society",
    href: "/about-society",
  },
  {
    label: "Panchayat System",
    href: "/panchayat-system",
  },
  {
    label: "Vision & Mission",
    href: "/visionmission",
  },
  {
    label: "From The Desk of Principal",
    href: "/from-the-desk-of-principal",
  },
];

const objectives = [
  "To ensure that the youth gets adequate opportunities to identify and develop their skills and potentials.",
  "To produce intellectual capital in terms of research output, transfer of knowledge and technology-oriented attitude in the field of education.",
  "To enable prospective teachers to understand the inter-disciplinary nature of educational theory and practice.",
  "To prepare individuals for independent learning, reference skills, critical thinking, conceptualization and self-evaluation.",
  "To enable prospective teachers to realize the diverse needs of students and give respect to equity.",
  "To prepare prospective teachers for self-development and advancement in their field.",
  "To mould individuals into integrated personalities who are competent, spiritually mature, physically strong and socially sensitive.",
  "To help build happy and healthy school and community relationships and promote interest in lifelong learning.",
  "To develop love for Indian culture and strengthen a sense of national pride and identity among prospective teachers.",
  "To create awareness of environmental protection and the need to maintain ecological balance.",
  "To prepare prospective teachers for inculcation of values and develop a sense of citizenship.",
  "To enable prospective teachers to develop teaching competencies and performance skills using appropriate aids including ICT.",
];

export default function About() {
  return (
    <InnerPage
      eyebrow="ABOUT CRCOE"
      title="About Us"
      description="Discover the history, purpose and educational objectives of Chhotu Ram College of Education."
      breadcrumb={["About Us"]}
      sidebarTitle="About CRCOE"
      sidebarLinks={aboutLinks}
      activeLink="About Us"
    >

      <div className="inner-content-header">
        <span className="inner-content-eyebrow">
          BRIEF HISTORY
        </span>

        <h2>
          A tradition of
          <em> teacher education.</em>
        </h2>
      </div>

      <div className="inner-intro">
        <p>
          Chhotu Ram College of Education is one of the
          premier institutions of Haryana, established with
          the aim of contributing to quality education through
          the preparation of well-trained teachers.
        </p>
      </div>

      <p>
        Chhotu Ram College of Education was established in
        response to the growing concern of educational leaders
        to impart quality education to students. It was felt
        that this objective could be achieved by developing a
        sizable class of well-trained teachers.
      </p>

      <p>
        The B.T. class was started in 1951 and B.Ed. in 1955
        under the patronage of Ch. Uday Mann, worthy president
        of Jat Society, and Sh. S.S. Gill, Principal. The
        institution later scaled another height with the
        introduction of M.Ed. in the college.
      </p>

      <div className="inner-facts">
        <div className="inner-fact">
          <strong>1951</strong>
          <span>B.T. Started</span>
        </div>

        <div className="inner-fact">
          <strong>1955</strong>
          <span>B.Ed. Started</span>
        </div>

        <div className="inner-fact">
          <strong>1987</strong>
          <span>IGNOU Study Centre</span>
        </div>
      </div>

      <h3>
        Continuing a wider educational contribution
      </h3>

      <p>
        The institution has contributed to the spread of
        higher education in North India. The college also has
        the distinction of having Dr. Rajender Prasad, Hon'ble
        President of India, as the Guest of Honour to award
        degrees to students in 1958.
      </p>

      <p>
        The college has an attractive building with modern
        infrastructure and a well-stocked library. It has also
        been successfully managing an IGNOU Study Centre since
        1987.
      </p>

      <p>
        With the goals of higher education continuing to
        expand, the institution remains committed to the
        ongoing development of education and to meeting the
        changing needs of learners and educators.
      </p>

      <div className="inner-objectives">

        <div className="inner-objectives-title">
          <span>01</span>
          <h3>Objectives of C.R. College of Education</h3>
        </div>

        <div className="objective-list">
          {objectives.map((objective, index) => (
            <div
              className="objective-item"
              key={index}
            >
              <span className="objective-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{objective}</p>
            </div>
          ))}
        </div>

      </div>

    </InnerPage>
  );
}