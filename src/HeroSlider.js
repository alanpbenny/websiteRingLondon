import { useEffect, useState } from "react";
import "./HeroSlider.css";

export default function HeroSlider() {
  // put your images in /public like: /main01.jpg, /main02.jpg, /main03.jpg
  const images = ["/main01.jpg", "/main02.jpg", "/main03.jpg"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000); // change speed here (ms)

    return () => clearInterval(id);
  }, [images.length]);

  // ⬅️ Next / Prev handlers
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-slider">
      <img
        src={images[index]}
        alt={`Boxing Gym slide ${index + 1}`}
        className="hero-image"
      />

      {/* optional dots */}
      <div className="hero-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      {/* Arrows */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
