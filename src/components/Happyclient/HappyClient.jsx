import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaUsers, FaSyncAlt, FaUserTie } from "react-icons/fa";
import statsData from "./happyclientdata.json";
import styles from "./Happyclient.module.css";

const iconMap = {
  FaCheckCircle: FaCheckCircle,
  FaUsers: FaUsers,
  FaSyncAlt: FaSyncAlt,
  FaUserTie: FaUserTie,
};

const StatItem = ({ icon, count, label }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const IconComponent = iconMap[icon];

  const startCounter = () => {
    const increment = Math.ceil(count / 50);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= count) {
        clearInterval(interval);
        setCurrentCount(count);
      } else {
        setCurrentCount(current);
      }
    }, 40);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounter();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, count]);

  return (
    <div className={styles.statItem} ref={ref}>
      <IconComponent className={styles.icon} />
      <h3 className={styles.count}>{currentCount}+</h3>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

const Happyclient = () => {
  return (
    <div className={styles.container}>
      {statsData.map((item) => (
        <StatItem
          key={item.id}
          icon={item.icon}
          count={item.count}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Happyclient;
