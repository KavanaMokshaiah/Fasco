import React, { useState } from "react";
import styles from "../../styles/organisms/Navbar.module.scss";
import ButtonAtom from "../atoms/ButtonAtom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FASCO</div>

      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
        <li>
          <a href="#" className={styles.active}>
            Home
          </a>
        </li>
        <li>
          <a href="#">Deals</a>
        </li>
        <li>
          <a href="#">New Arrivals</a>
        </li>
        <li>
          <a href="#">Packages</a>
        </li>
        <li>
          <a href="#">Sign in</a>
        </li>
        <li className={styles.buttonWrapper}>
          <ButtonAtom type="button" className={styles.blackButton}>
            Sign Up
          </ButtonAtom>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
