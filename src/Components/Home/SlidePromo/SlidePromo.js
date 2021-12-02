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
                <div className={styles.imgWidth}>
                  <img src={promo.image[0]} alt="" />
                </div>
                <div className={styles.nameproduct}>
                  <h3>{promo.name}</h3>
                </div>
                <div className={`${styles.dadosItem}`}>
                  <span className={styles.oldPrice}>R$ {promo.OldPrice}.00</span>
                  <span className={styles.price}>R$ {(promo.price).toFixed(2)}</span>
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
