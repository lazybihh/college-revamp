import './Navbar.css';

export default function Navbar() {
  return (
    <header className="site-header">

      {/* Top Bar */}
      <div className="utility-bar">
        <div className="utility-inner">
          <div className="utility-left">
            <span>CHHOTU RAM COLLEGE OF EDUCATION</span>
            <i></i>
            <span>ROHTAK, HARYANA</span>
          </div>

          <div className="utility-right">
            <a href="/student-support-services">Student Support</a>
            <a href="/location-map">Location</a>
            <a href="/contact-us">Contact</a>
          </div>
        </div>
      </div>

      {/* Branding */}
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

          <div className="header-line"></div>

          <img
            src="/images/naac-logo.png"
            alt="NAAC Accreditation"
            className="naac-logo"
          />

        </div>
      </div>

      {/* Navigation */}
      <nav className="main-navigation">
        <div className="navigation-inner">

          <a href="/" className="nav-link">
            Home
          </a>

          {/* About Us */}
          <div className="nav-dropdown">
            <button className="nav-link">
              About Us <span className="chevron">⌄</span>
            </button>

            <div className="dropdown-panel">
              <a href="/about-us">About Us</a>
              <a href="/our-inspiration">Our Inspiration</a>
              <a href="/about-society">About Society</a>
              <a href="/panchayat-system">Panchayat System</a>
              <a href="/visionmission">Vision & Mission</a>
              <a href="/from-the-desk-of-principal">
                From The Desk of Principal
              </a>
            </div>
          </div>

          {/* Academics */}
          <div className="nav-dropdown">
            <button className="nav-link">
              Academics <span className="chevron">⌄</span>
            </button>

            <div className="dropdown-panel">
              <a href="/academics">Academics</a>
              <a href="/courses-offered">Courses Offered</a>
              <a href="/time-table">Time Table</a>
              <a href="/academic-calendar">Academic Calendar</a>
              <a href="/examination-facility">Examination Facility</a>
              <a href="/downloads/files/n67cea19c9be53.pdf">
                Student Satisfaction Survey
              </a>
              <a href="/downloads/files/n67cea1f6c8e30.pdf">
                Result
              </a>
            </div>
          </div>

          {/* Admission */}
          <div className="nav-dropdown">
            <button className="nav-link">
              Admission <span className="chevron">⌄</span>
            </button>

            <div className="dropdown-panel">
              <a href="/admission-procedure">Admission Procedure</a>
              <a href="/guidancecounseling-cell">
                Guidance & Counseling Cell
              </a>
            </div>
          </div>

          <a href="/ncte-documents" className="nav-link">
            Mandatory Docs
          </a>

          {/* Faculty */}
          <div className="nav-dropdown">
            <button className="nav-link">
              Faculty <span className="chevron">⌄</span>
            </button>

            <div className="dropdown-panel">
              <a href="/an-ideal-teacher">An Ideal Teacher</a>
              <a href="/downloads/files/n67ceb0fc014e2.pdf">
                Teaching Staff
              </a>
              <a href="/downloads/files/n67f4dd834a66d.pdf">
                Non-Teaching Staff
              </a>
            </div>
          </div>

          {/* Facilities */}
          <div className="nav-dropdown">
            <button className="nav-link">
              Facilities <span className="chevron">⌄</span>
            </button>

            <div className="dropdown-panel">
              <a href="/class-rooms">Class Rooms</a>
              <a href="/ict-center">ICT Center</a>
              <a href="/library-facility">Library Facility</a>
              <a href="/laboratories">Laboratories</a>
              <a href="/home-science-lab">Home Science Lab</a>
              <a href="/language-lab">Language Lab</a>
              <a href="/psychology-lab">Psychology Lab</a>
              <a href="/science-and-mathematics-lab">
                Science & Maths Lab
              </a>
              <a href="/sports-facilities">Sports Facilities</a>
              <a href="/women-cell">Women Cell</a>
              <a href="/other-facilities">Other Facilities</a>
            </div>
          </div>

          {/* IQAC */}
          <div className="nav-dropdown">
            <button className="nav-link">
              IQAC <span className="chevron">⌄</span>
            </button>

            <div className="dropdown-panel">
              <a href="/iqac">IQAC</a>
              <a href="/meeting-minutes">Meeting Minutes</a>
              <a href="/aqar-reports">AQAR Reports</a>
              <a href="/aqar-list">AQAR List</a>
            </div>
          </div>

          <a href="/gallery" className="nav-link">
            Gallery
          </a>

          <a href="/downloads" className="nav-link">
            Downloads
          </a>

          <a href="/student-support-services" className="nav-link">
            Student Support
          </a>

          {/* Contact */}
          <div className="nav-dropdown">
            <button className="nav-link">
              Contact <span className="chevron">⌄</span>
            </button>

            <div className="dropdown-panel">
              <a href="/contact-us">Contact Us</a>
              <a href="/location-map">Location Map</a>
            </div>
          </div>

        </div>
      </nav>

    </header>
  );
}