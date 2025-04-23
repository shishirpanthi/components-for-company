import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "./SocialSidebar.module.css";

const SocialSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a href="#" className={`${styles.iconWrapper} ${styles.facebook}`}>
        <FaFacebookF className={styles.icon} />
      </a>
      <a href="#" className={`${styles.iconWrapper} ${styles.linkedin}`}>
        <FaLinkedinIn className={styles.icon} />
      </a>
      <a href="#" className={`${styles.iconWrapper} ${styles.instagram}`}>
        <FaInstagram className={styles.icon} />
      </a>
      <a href="#" className={`${styles.iconWrapper} ${styles.whatsapp}`}>
        <FaWhatsapp className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialSidebar;
