import React, { useEffect, useState } from "react";
import styles from "./ServicesAnimation.module.css";
import servicesAnimationData from "./servicesAnimationData.json";


const ServicesAnimation = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Ensure each ring contains exactly two items
    const rings = [];
    for (let i = 0; i < servicesAnimationData.length; i += 2) {
      rings.push(servicesAnimationData.slice(i, i + 2));
    }

    // If there are less than 3 rings, fill with empty arrays
    while (rings.length < 3) {
      rings.push([]);
    }

    setServices(rings);
  }, []);

  // Adjusted radii for proper spacing
  const ringRadii = [200, 300, 400]; // Radii for the three rings

  return (
    <>
      <div className={styles.container}>
        <div className={styles.ringContainer}>
          {/* Render each ring */}
          {services.map((serviceRing, ringIndex) => (
            <div
              key={`ring-${ringIndex}`}
              className={`${styles.ring} ${styles[`ring${ringIndex + 1}`]}`} // Dynamic ring class
            >
              {serviceRing.map((service, index) => (
                <div
                  key={service.id}
                  className={styles.icon}
                  style={{
                    transform:
                      ringIndex === 1
                        ? `rotate(${index * 180}deg) translate(${
                            ringRadii[ringIndex]
                          }px)` // Opposite directions for second ring
                        : `rotate(${
                            (index * 360) / serviceRing.length
                          }deg) translate(${ringRadii[ringIndex]}px)`,
                  }}
                >
                  <img src={service.icon} alt={`Service ${service.id}`} />
                </div>
              ))}
            </div>
          ))}

          {/* Center Icon */}
          <div className={styles.centerIcon}>
            <img src="/img/tech.png" alt="Center Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesAnimation;
