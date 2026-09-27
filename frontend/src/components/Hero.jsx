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
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.label}
            className={index === active ? "active" : ""}
          />
        ))}
      </div>

      <div className="hero-shade"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span></span>
          Nurturing Minds
          <i></i>
          Building Futures
        </div>

        <h1>
          Shaping the
          <br />
          Educators
          <br />
          <em>of Tomorrow</em>
        </h1>

        <p>
          At Chhotu Ram College of Education, we believe in nurturing
          capable, compassionate and confident educators who can make
          a real difference in society.
        </p>

        <div className="hero-buttons">
          <a href="/about-us" className="hero-button primary">
            Explore College
            <span>→</span>
          </a>

          <a href="/courses-offered" className="hero-button secondary">
            Our Courses
            <span>→</span>
          </a>
        </div>
      </div>

      <div className="hero-slide-info">
        <span className="hero-slide-number">
          0{active + 1}
        </span>

        <i></i>

        <small>{slides[active].label}</small>
      </div>

      <div className="hero-controls">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
          >
            <span>0{index + 1}</span>
          </button>
        ))}
      </div>

      <div className="hero-location">
        <span>ROHTAK</span>
        <span>HARYANA</span>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <i></i>
      </div>
    </section>
  );
}