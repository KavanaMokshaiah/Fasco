import React from 'react';
import styles from '../../styles/organisms//footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.logo}>FASCO</div>
        <ul className={styles.links}>
          <li>Support Center</li>
          <li>Invoicing</li>
          <li>Contract</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>FAQ,s</li>
        </ul>
      </div>
      <div className={styles.bottomRow}>
        <p>Copyright © 2022 Xpro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
