import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  {
    image: "/images/slider_01.jpg",
    label: "Where educators are inspired",
  },
  {
    image: "/images/slider_02.jpg",
    label: "Learning beyond the classroom",
  },
  {
    image: "/images/slider_03.jpg",
    label: "A legacy of learning",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-label="College highlights">

      <div className="hero-images">
        <img
          src={slides[active].image}
          alt=""
          className="active"
        />
      </div>

      <div className="hero-shade"></div>

      <div className="hero-content">

        <div className="hero-eyebrow">
          <span></span>
          Chhotu Ram College of Education
        </div>

        <h2>
          <span>Shaping</span>
          <em>educators.</em>
        </h2>

        <h3>Inspiring generations.</h3>

        <p>
          A tradition of teacher education in Rohtak, built on knowledge,
          values and professional excellence since 1951.
        </p>

        <div className="hero-meta">

          <div>
            <strong>
              69<span>+</span>
            </strong>
            <small>Years of legacy</small>
          </div>

          <div className="hero-meta-line"></div>

          <div>
            <strong>1951</strong>
            <small>Established</small>
          </div>

        </div>

      </div>

      <div className="hero-slide-info">
        <span>0{active + 1}</span>
        <i></i>
        <small>{slides[active].label}</small>
      </div>

      <div className="hero-controls">

        <button
          type="button"
          className={active === 0 ? "active" : ""}
          onClick={() => setActive(0)}
        >
          01
        </button>

        <button
          type="button"
          className={active === 1 ? "active" : ""}
          onClick={() => setActive(1)}
        >
          02
        </button>

        <button
          type="button"
          className={active === 2 ? "active" : ""}
          onClick={() => setActive(2)}
        >
          03
        </button>

      </div>

      <div className="hero-location">
        <span>ROHTAK</span>
        <span>HARYANA</span>
      </div>

    </section>
  );
}