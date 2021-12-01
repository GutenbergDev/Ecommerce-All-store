import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SlidePromo.module.css';

const SlidePromo = ({ sectionPromo }) => {
  const carousel = React.useRef(null);

  const promocao = sectionPromo.filter((promo) => promo.price <= 280);
  console.log(`promo: `, promocao)


   function prev() {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;

   }

   function next() {
     carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <section className={styles.container}>
      <div
        className={styles.carousel}
        ref={carousel}
      >
        {promocao.map((promo) => (
          <Link
            className={styles.item}
            key={promo.nameId}
            to={`/promocao/${promo.nameId}`}
          >
            <div>
              <div className={`${styles.linkContainerPromo}`}>
                <div>
                  {promo.name}
                </div>
              </div>
            </div>  
          </Link>
        ))}
      </div>
      <nav className={`${styles.nav}`}>
        <button className={styles.Prev} onClick={prev}>
          P
        </button>
        <button className={styles.Next} onClick={next}>
          N
        </button>
      </nav>
    </section>
  )
}

export default SlidePromo;
