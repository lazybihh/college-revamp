import "./InnerPage.css";
import Footer from "./Footer.jsx";

export default function InnerPage({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  sidebarTitle,
  sidebarLinks = [],
  activeLink,
  heroImage,
  children,
}) {
  return (
    <div className="inner-page">

      <section
        className="inner-hero"
        style={{
          backgroundImage: `url(${
            heroImage || "/images/campus-wide.jpg"
          })`,
        }}
      >
        <div className="inner-hero-inner">

          <div className="inner-hero-content">
            <span className="inner-eyebrow">
              {eyebrow}
            </span>

            <h1>{title}</h1>

            {description && (
              <p>{description}</p>
            )}

            <div className="inner-breadcrumb">
              <a href="/">Home</a>

              {breadcrumb.map((item, index) => (
                <span key={index}>
                  <b>/</b>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <span className="inner-hero-number">
            01
          </span>

        </div>
      </section>

      <main className="inner-main">
        <div className="inner-layout">

          <article className="inner-content">
            {children}
          </article>

          <aside className="inner-sidebar">

            <div className="sidebar-heading">
              <span>EXPLORE</span>
              <h2>{sidebarTitle}</h2>
            </div>

            <nav className="sidebar-links">
              {sidebarLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={
                    activeLink === link.label
                      ? "active"
                      : ""
                  }
                >
                  <span>{link.label}</span>
                  <strong>↗</strong>
                </a>
              ))}
            </nav>

          </aside>

        </div>
      </main>

      <Footer />

    </div>
  );
}