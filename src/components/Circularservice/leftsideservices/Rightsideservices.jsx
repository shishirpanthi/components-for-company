import React from "react";
import styles from "./Rightsideservices.module.css";
import { FaRocket } from "react-icons/fa";

const Rightsideservices = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Creative Journey</h1>
      <h2 className={styles.subtitle}>
        Start Here
        <FaRocket className={styles.rocketIcon} />
      </h2>

      <p className={styles.description}>
        We are a creative technology company dedicated to offering digital
        marketing, website development, user experience design, graphic design
        services, and professional training. Our mission is to help businesses
        and individuals grow by creating strong digital solutions, enhancing
        online presence, improving user experience, and building creative skills
        for the future.
      </p>

      <div className={styles.divider}></div>

      <h3 className={styles.exploreTitle}>Explore More</h3>
    </div>
  );
};

export default Rightsideservices;
