import React from "react";
import styles from "./Services.module.css";
import servicesData from "./services.json";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.headerImage}>
        <h2 className={styles.headerTitle}>
          <span className={styles.titleLine}>—</span>
          Service we provide
          <span className={styles.titleLine}>—</span>
        </h2>
        <p className={styles.headerSubtitle}>
          Get the best IT technology <br/>services & solutions
        </p>
      </div>
      <div className={styles.servicesContainer}>
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={styles.serviceCard}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.serviceTitle}>
                <span className={styles.titleText}>{service.title}</span>
              </h3>
              <div className={styles.imageContainer}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.serviceImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <p className={styles.serviceDescription}>
                {service.description.split("").map((char, i) => (
                  <span key={i} style={{ "--char-index": i }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </p>
              <div className={styles.readMore}>Explore Service →</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
