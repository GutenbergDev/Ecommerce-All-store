import React from 'react';
import styles from './SlidePromo.module.css';

const SlidePromo = ({ sectionPromo }) => {
  const promocao = sectionPromo.filter((promo) => promo.discount === true);
  console.log(promocao)

  return (
    <section className={styles.container}>
      <div
        className={styles.content}
      >
        {

        }
      </div>
    </section>
  )
}

export default SlidePromo;
