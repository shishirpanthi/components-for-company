import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
    <h2 className={styles.heading}>Get In Touch</h2>
      <p className={styles.subtitle}>
        We're here to help! Feel free to reach out for any queries, feedback, or
        business inquiries.
      </p>

      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <FaPhone className={styles.icon} />
          <span>+977-9803193791</span>
        </div>
        <div className={styles.infoItem}>
          <FaEnvelope className={styles.icon} />
          <span>somarjun.prathistha@gmail.com</span>
        </div>
        <div className={styles.infoItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>Tilotttama-3,Shankarnagar(Rupandehi)</span>
        </div>
      </div>

      <div className={styles.formAndMap}>
        <div className={styles.formContainer}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input
            type="email"
            placeholder="Email Address"
            className={styles.input}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className={styles.input}
          />
          <textarea
            placeholder="Description"
            className={styles.textarea}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846819!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f4e2c5b1%3A0x4c8b8c0b0b0b0b0b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2snp!4v1616161616161!5m2!1sen!2snp"
            width="100%"
            height= "90%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.socialSection}>
        <p>Follow our official social network</p>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}>
            <FaFacebookF />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaInstagram />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaLinkedinIn />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
