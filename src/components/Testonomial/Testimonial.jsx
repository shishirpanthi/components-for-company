import React, { useEffect, useState, useRef } from "react";
import styles from "./Testimonial.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import testimonialData from "./testimonials.json";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Repeat testimonials 5 times for a dense, seamless marquee
    setTestimonials(
      testimonialData
        .concat(testimonialData)
        .concat(testimonialData)
        .concat(testimonialData)
        .concat(testimonialData)
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -270, behavior: "smooth" }); // Matches card width (250px) + gap (20px)
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 270, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.testimonialSection} ref={sectionRef}>
      <h2 className={styles.heading}>Testimonial</h2>
      <p className={styles.subheading}>
        Somarjun Tech Company serves a wide range of clients, primarily focusing
        on businesses seeking digital transformation through modern design,
        technology, and software solutions.
      </p>
      <div className={styles.testimonialWrapper}>
        <button
          className={styles.arrowButton}
          onClick={scrollLeft}
          aria-label="Scroll testimonials left"
        >
          <FaArrowLeft />
        </button>
        <div
          className={`${styles.testimonialContainer} ${
            isVisible && !isPaused ? styles.animate : ""
          }`}
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className={styles.testimonialImage}
              />
              <h3 className={styles.name}>{testimonial.name}</h3>
                <p className={styles.testimonialText}>
                  {expanded[index] || testimonial.paragraph.length <= 80
                    ? `" ${testimonial.paragraph}"`
                    : `"${testimonial.paragraph.substring(0, 80)}... "`}
                </p>
              {testimonial.paragraph.length > 80 && (
                <button
                  className={styles.readMoreButton}
                  onClick={() => toggleReadMore(index)}
                >
                  {expanded[index] ? "Read Less" : "Read More"}
                </button>
              )}
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < testimonial.rating
                        ? styles.starFilled
                        : styles.starEmpty
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className={styles.arrowButton}
          onClick={scrollRight}
          aria-label="Scroll testimonials right"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
