import React from "react";
import styles from "../../styles/organisms/NavbarCommon.module.scss";
import { FaSearch, FaUser, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NavbarCommon = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>FASCO</div>

      <nav className={styles.navLinks}>
        <Link
          to="/Home#"
          className={currentPath === "/Home#" ? styles.active : ""}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={currentPath === "/shop" ? styles.active : ""}
        >
          Shop
        </Link>
        <Link
          to="/products"
          className={currentPath === "/products" ? styles.active : ""}
        >
          Products
        </Link>
        <div className={styles.dropdown}>
          <Link
            to="/pages"
            className={currentPath === "/pages" ? styles.active : ""}
          >
            Pages ▾
          </Link>
        </div>
      </nav>

      <div className={styles.icons}>
        <FaSearch />
        <FaUser />
        <FaRegHeart />
        <FaShoppingCart />
      </div>
    </header>
  );
};

export default NavbarCommon;
