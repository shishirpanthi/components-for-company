import React, { useEffect, useState } from "react";
import styles from "./ServicesAnimation.module.css";
import servicesAnimationData from "./servicesAnimationData.json";

const ServicesAnimation = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Group services into pairs for each ring
    const groupedServices = [];
    for (let i = 0; i < servicesAnimationData.length; i += 2) {
      groupedServices.push(servicesAnimationData.slice(i, i + 2));
    }
    setServices(groupedServices);
  }, []);

  // Adjusted radii for better spacing between rings
  const ringRadii = [110, 150, 190]; // Adjusted for three rings

  return (
    <div className={styles.container}>
      <div className={styles.ringContainer}>
        {/* Each ring contains two icons */}
        {services.map((servicePair, ringIndex) => (
          <div
            key={`ring-${ringIndex}`}
            className={`${styles.ring} ${styles[`ring${ringIndex + 1}`]}`} // Dynamic ring class
          >
            {servicePair.map((service, index) => (
              <div
                key={service.id}
                className={styles.icon}
                style={{
                  transform: `rotate(${
                    (index * 180) / servicePair.length
                  }deg) translate(${ringRadii[ringIndex]}px) rotate(-${
                    (index * 180) / servicePair.length
                  }deg)`,
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
  );
};

export default ServicesAnimation;
