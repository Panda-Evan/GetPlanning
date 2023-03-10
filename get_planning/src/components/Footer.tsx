import React from 'react';
import styles from '@/styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-links"]}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <div className={styles["footer-social"]}>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div className={styles["footer-copy"]}>
        &copy; 2023 My Website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
