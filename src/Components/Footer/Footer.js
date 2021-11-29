import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  return (
    <section className={`${styles.container} ${styles.footer}`}>
      <div className={styles.footerContent}>
        <h1>Footer</h1>
      </div>
    </section>
  )
}

export default Footer;
