// LeftService.jsx
import React from "react";
import styles from "./LeftService.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

const LeftService = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Creative Journey</h1>
      <h2 className={styles.start}>
        Start Here <FaArrowCircleRight className={styles.icon} />
      </h2>
      <p className={styles.description}>
        We are a creative technology company dedicated to offering digital
        marketing, website development, user experience design, graphic design
        services, and professional training. Our mission is to help businesses
        and individuals grow by creating strong digital solutions, enhancing
        online presence, improving user experience, and building creative skills
        for the future.
      </p>
      <hr className={styles.line} />
      <button className={styles.button}>Explore More</button>
    </div>
  );
};

export default LeftService;
