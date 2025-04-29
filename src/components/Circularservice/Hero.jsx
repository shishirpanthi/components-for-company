import React from "react";
import styles from "./Hero.module.css";
import ServicesAnimation from "./rightside/ServicesAnimation.jsx";
import LeftService from "./leftsideservices/LeftService.jsx";

function Hero() {
  return (
    <>
      <div className={styles.background}>
          <LeftService />
          <ServicesAnimation />
        </div>
    </>
  );
}

export default Hero;
