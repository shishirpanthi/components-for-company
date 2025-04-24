import React, { useEffect, useState } from "react";
import styles from "./Testimonial.module.css";

// Importing JSON data
import testimonialData from "./testimonials.json";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    setTestimonials(testimonialData);
  }, []);

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
        <div className={styles.testimonialContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className={styles.testimonialImage}
              />
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.paragraph}>
                {expanded[index] || testimonial.paragraph.length <= 80
                  ? testimonial.paragraph
                  : `${testimonial.paragraph.substring(0, 80)}...`}
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
      </div>
    </div>
  );
};

export default Testimonial;
