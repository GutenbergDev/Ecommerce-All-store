import React from 'react';
import styles from './Footer.module.css';


const Footer = () => {
  return (
    <section className={`${styles.container} ${styles.footer}`}>
      <div className={styles.footerContent}>
        <section>
          PRODUTOS
        </section>
        <section>
          SUPORTE 
        </section>
        <section>
          SOBRE A SHOES
        </section>
        <section>
          REDES SOCIAIS
        </section>
      </div>
    </section>
  )
}

export default Footer;
