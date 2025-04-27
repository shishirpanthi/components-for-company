import React, { useEffect, useState, useRef } from "react";
import styles from "./Testimonial.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons
import testimonialData from "./testimonials.json";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [expanded, setExpanded] = useState({});
  const containerRef = useRef(null); // Ref for the testimonial container

  useEffect(() => {
    setTestimonials(testimonialData);
  }, []);

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 300; // Adjust scroll distance as needed
  };

  return (
    <div className={styles.testimonialSection}>
      <h2 className={styles.heading}>Testimonial</h2>
      <p className={styles.subheading}>
        Somarjun Tech Company serves a wide range of clients, primarily focusing
        on businesses seeking digital transformation through modern design,
        technology, and software solutions.
      </p>
      <div className={styles.testimonialWrapper}>
        <button className={styles.arrowButton} onClick={scrollLeft}>
          <FaArrowLeft />
        </button>
        <div className={styles.testimonialContainer} ref={containerRef}>
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
                  ? `"${testimonial.paragraph}"`
                  : `"${testimonial.paragraph.substring(0, 80)}..."`}
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
        <button className={styles.arrowButton} onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
