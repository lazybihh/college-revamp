import './Navbar.css';

const menus = [
  {
    label: 'About Us',
    items: [
      ['About Us', '/about-us'],
      ['Our Inspiration', '/our-inspiration'],
      ['About Society', '/about-society'],
      ['Panchayat System', '/panchayat-system'],
      ['Vision & Mission', '/visionmission'],
      ['From The Desk of Principal', '/from-the-desk-of-principal'],
    ],
  },
  {
    label: 'Academics',
    items: [
      ['Academics', '/academics'],
      ['Courses Offered', '/courses-offered'],
      ['Time Table', '/time-table'],
      ['Academic Calendar', '/academic-calendar'],
      ['Examination Facility', '/examination-facility'],
      ['Student Satisfaction Survey', '/downloads/files/n67cea19c9be53.pdf'],
      ['Result', '/downloads/files/n67cea1f6c8e30.pdf'],
    ],
  },
  {
    label: 'Admission',
    items: [
      ['Admission Procedure', '/admission-procedure'],
      ['Guidance & Counseling Cell', '/guidancecounseling-cell'],
    ],
  },
  {
    label: 'Faculty',
    items: [
      ['An Ideal Teacher', '/an-ideal-teacher'],
      ['Teaching Staff', '/downloads/files/n67ceb0fc014e2.pdf'],
      ['Non-Teaching Staff', '/downloads/files/n67f4dd834a66d.pdf'],
    ],
  },
  {
    label: 'Facilities',
    items: [
      ['Class Rooms', '/class-rooms'],
      ['ICT Center', '/ict-center'],
      ['Library Facility', '/library-facility'],
      ['Laboratories', '/laboratories'],
      ['Home Science Lab', '/home-science-lab'],
      ['Language Lab', '/language-lab'],
      ['Psychology Lab', '/psychology-lab'],
      ['Science & Maths Lab', '/science-and-mathematics-lab'],
      ['Sports Facilities', '/sports-facilities'],
      ['Women Cell', '/women-cell'],
      ['Other Facilities', '/other-facilities'],
    ],
  },
  {
    label: 'IQAC',
    items: [
      ['IQAC', '/iqac'],
      ['Meeting Minutes', '/meeting-minutes'],
      ['AQAR Reports', '/aqar-reports'],
      ['AQAR List', '/aqar-list'],
    ],
  },
];

function Dropdown({ items }) {
  return (
    <div className="dropdown-panel">
      {items.map(([label, href]) => (
        <a href={href} key={href}>
          <span>{label}</span>
          <b>↗</b>
        </a>
      ))}
    </div>
  );
}

function Menu({ menu }) {
  return (
    <div className="nav-dropdown">
      <button type="button" className="nav-link">
        {menu.label}
        <span className="chevron">⌄</span>
      </button>

      <Dropdown items={menu.items} />
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="site-header">

      {/* TOP BAR */}

      <div className="utility-bar">
        <div className="utility-inner">

          <div className="utility-left">
            <span>CHHOTU RAM COLLEGE OF EDUCATION</span>
            <i />
            <span>ROHTAK, HARYANA</span>
          </div>

          <div className="utility-right">
            <a href="/student-support-services">
              Student Support
            </a>

            <a href="/location-map">
              Location
            </a>

            <a href="/contact-us">
              Contact
            </a>
          </div>

        </div>
      </div>


      {/* COLLEGE BRANDING */}

      <div className="brand-header">

        <a href="/" className="college-brand">

          <img
            src="/images/logo.png"
            alt="Chhotu Ram College of Education"
            className="college-logo"
          />

        </a>


        <div className="brand-right">

          <div className="header-contact">

            <span>CALL US</span>

            <a href="tel:+919315855909">
              +91 93158 55909
            </a>

          </div>


          <div className="header-line" />


          <img
            src="/images/naac-logo.png"
            alt="NAAC Accreditation"
            className="naac-logo"
          />

        </div>

      </div>


      {/* NAVIGATION */}

      <nav className="main-navigation">

        <div className="navigation-inner">

          <a
            href="/"
            className="nav-link nav-home"
          >
            Home
          </a>


          <Menu menu={menus[0]} />

          <Menu menu={menus[1]} />

          <Menu menu={menus[2]} />


          <a
            href="/ncte-documents"
            className="nav-link"
          >
            Mandatory Docs
          </a>


          <Menu menu={menus[3]} />

          <Menu menu={menus[4]} />


          <a
            href="/gallery"
            className="nav-link"
          >
            Gallery
          </a>


          <Menu menu={menus[5]} />


          <a
            href="/downloads"
            className="nav-link"
          >
            Downloads
          </a>


          <a
            href="/student-support-services"
            className="nav-link"
          >
            Student Support
          </a>


          <div className="nav-dropdown">

            <button
              type="button"
              className="nav-link"
            >
              Contact
              <span className="chevron">⌄</span>
            </button>

            <Dropdown
              items={[
                ['Contact Us', '/contact-us'],
                ['Location Map', '/location-map'],
              ]}
            />

          </div>

        </div>

      </nav>

    </header>
  );
}