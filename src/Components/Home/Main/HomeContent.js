import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Main/HomeContent.module.css';

const HomeContent = ({ sectionNews }) => {
  const camiseta = sectionNews.filter((camiseta) => camiseta.nameId === "basq-3");

  const nikeSb = sectionNews.filter((nikeSb) => nikeSb.nameId === "sb-1");

  console.log(`Aqui Camiseta`, camiseta[0])
  console.log(`Aqui Sb`, nikeSb[0])



  return (
    <section className={styles.container}>
      <div className={styles.mainContent}>
       <div className={`${styles.mainContainer1} animeLeft`}>
         <div style={{ display: 'flex' }}>
          <div className={styles.mainContainer1Item}>
              <h3>{camiseta[0].name}</h3>
              <p>{camiseta[0].description}</p>
          </div>
          <div className={styles.mainContainer1Item2}>
            <div>
              <Link to={`/camisetas/${camiseta[0].userId}`}>
                <img src={camiseta[0].image[0]} alt="" />
              </Link>
            </div>
            <div className={styles.containerPrice}>
              <div className={styles.priceStyle}>
                <span className={styles.price}>R$ {camiseta[0].price}</span>
              </div>
              <span><span className={styles.oldPrice}>R$ {(camiseta[0].OldPrice).toFixed(2)}</span> ou 12x de <span className={styles.parcelas}>R$ {(camiseta[0].OldPrice / 12).toFixed(2)}</span></span>
            </div>
          </div>
         </div>
         <div className={styles.btnContainer}>
            <Link to={`/camisetas/${camiseta[0].userId}`} className={styles.btnMain}>
              <span className={styles.btnMainText}>Ver Mais</span>
            </Link>
          </div>
       </div>
       <div className={`${styles.mainContainer2} animeLeft`}>
          <div className={styles.nameSb}>
            <h3>{nikeSb[0].name}</h3>
          </div>
       </div>
      </div>
    </section>
  )
}

export default HomeContent;

