import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Importing useLocation hook
import { FaBars } from "react-icons/fa"; // Importing hamburger icon from react-icons
import styles from "./Navbar.module.css"; // Importing CSS module

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Getting the current path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>
          <img
            src=".\images\companylogo.svg"
            alt="Logo"
            className={styles.logoImage}
          />
        </div>
      </Link>
      <button className={styles.hamburger} onClick={toggleMobileMenu}>
        <FaBars />
      </button>
      <ul
        className={`${styles.navlist} ${isMobileMenuOpen ? styles.show : ""}`}
      >
        <li className={styles.home}>
          <Link
            to="/"
            className={location.pathname === "/" ? styles.active : ""}
          >
            Home
          </Link>
        </li>
        <li className={styles.about}>
          <Link
            to="/about"
            className={location.pathname === "/about" ? styles.active : ""}
          >
            About
          </Link>
        </li>
        <li className={styles.services}>
          <Link
            to="/services"
            className={location.pathname === "/services" ? styles.active : ""}
          >
            Services
          </Link>
        </li>
        <li className={styles.project}>
          <Link
            to="/project"
            className={location.pathname === "/project" ? styles.active : ""}
          >
            Project
          </Link>
        </li>
        <li className={styles.career}>
          <Link
            to="/career"
            className={location.pathname === "/career" ? styles.active : ""}
          >
            Career
          </Link>
        </li>
        <li className={styles.blogs}>
          <Link
            to="/blogs"
            className={location.pathname === "/blogs" ? styles.active : ""}
          >
            Blogs
          </Link>
        </li>
        <li className={`${styles.contactusWrapper}`}>
          <Link
            to="/contactus"
            className={`${styles.contactus} ${
              location.pathname === "/contactus" ? styles.active : ""
            }`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
