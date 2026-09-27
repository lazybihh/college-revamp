import { useState } from "react";
import "./Navbar.css";

const menuItems = [
  {
    title: "About Us",
    links: [
      ["About Us", "/about-us"],
      ["Our Inspiration", "/our-inspiration"],
      ["About Society", "/about-society"],
      ["Panchayat System", "/panchayat-system"],
      ["Vision & Mission", "/visionmission"],
      ["From The Desk of Principal", "/from-the-desk-of-principal"],
    ],
  },
  {
    title: "Academics",
    links: [
      ["Academics", "/academics"],
      ["Courses Offered", "/courses-offered"],
      ["Time Table", "/time-table"],
      ["Academic Calendar", "/academic-calendar"],
      ["Examination Facility", "/examination-facility"],
      ["Student Satisfaction Survey", "/student-satisfaction-survey"],
      ["Result", "/result"],
    ],
  },
  {
    title: "Admissions",
    links: [
      ["Admission Procedure", "/admission-procedure"],
      ["Guidance & Counseling Cell", "/guidancecounseling-cell"],
    ],
  },
  {
    title: "Faculty",
    links: [
      ["An Ideal Teacher", "/an-ideal-teacher"],
      ["Teaching Staff", "/teaching-staff"],
      ["Non-Teaching Staff", "/non-teaching-staff"],
    ],
  },
  {
    title: "Facilities",
    links: [
      ["Class Rooms", "/class-rooms"],
      ["ICT Center", "/ict-center"],
      ["Library Facility", "/library-facility"],
      ["Laboratories", "/laboratories"],
      ["Home Science Lab", "/home-science-lab"],
      ["Language Lab", "/language-lab"],
      ["Psychology Lab", "/psychology-lab"],
      ["Science & Maths Lab", "/science-and-mathematics-lab"],
      ["Sports Facilities", "/sports-facilities"],
      ["Women Cell", "/women-cell"],
      ["Other Facilities", "/other-facilities"],
    ],
  },
  {
    title: "IQAC",
    links: [
      ["IQAC", "/iqac"],
      ["Meeting Minutes", "/meeting-minutes"],
      ["AQAR Reports", "/aqar-reports"],
      ["AQAR List", "/aqar-list"],
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="utility-inner">
          <div className="utility-left">
            <span>EST. 1951</span>
            <i></i>
            <span>ROHTAK, HARYANA</span>
            <i></i>
            <span>TEACHER EDUCATION</span>
          </div>

          <div className="utility-right">
            <a href="/student-support-services">Student Support</a>
            <a href="/location-map">Location</a>
            <a href="/contact-us">Contact</a>
          </div>
        </div>
      </div>

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

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={menuOpen ? "menu-icon close" : "menu-icon"}>
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      <nav className="main-navigation">
        <div className="navigation-inner">
          <a href="/" className="nav-link active">
            Home
          </a>

          {menuItems.map((item) => (
            <div className="nav-dropdown" key={item.title}>
              <button type="button" className="nav-link">
                {item.title}
                <span className="nav-arrow">⌄</span>
              </button>

              <div className="dropdown-panel">
                <div className="dropdown-heading">
                  <span></span>
                  {item.title}
                </div>

                <div className="dropdown-links">
                  {item.links.map(([label, path]) => (
                    <a href={path} key={path}>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <a href="/ncte-documents" className="nav-link">
            Mandatory Docs
          </a>

          <a href="/downloads" className="nav-link">
            Downloads
          </a>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a
          href="/"
          className="mobile-menu-link mobile-home"
          onClick={closeMenu}
        >
          <span>Home</span>
        </a>

        {menuItems.map((item) => (
          <div className="mobile-menu-item" key={item.title}>
            <button
              type="button"
              className="mobile-menu-link"
              onClick={() => toggleMenu(item.title)}
            >
              <span>{item.title}</span>
              <strong>
                {openMenu === item.title ? "−" : "+"}
              </strong>
            </button>

            <div
              className={`mobile-submenu ${
                openMenu === item.title ? "open" : ""
              }`}
            >
              {item.links.map(([label, path]) => (
                <a
                  href={path}
                  key={path}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}

        <a
          href="/ncte-documents"
          className="mobile-menu-link"
          onClick={closeMenu}
        >
          <span>Mandatory Documents</span>
        </a>

        <a
          href="/downloads"
          className="mobile-menu-link"
          onClick={closeMenu}
        >
          <span>Downloads</span>
        </a>

        <div className="mobile-extra-links">
          <a
            href="/student-support-services"
            onClick={closeMenu}
          >
            Student Support
          </a>

          <a
            href="/location-map"
            onClick={closeMenu}
          >
            Location
          </a>

          <a
            href="/contact-us"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}