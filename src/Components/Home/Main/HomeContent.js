import React from 'react';
import styles from '../Main/HomeContent.module.css';

const HomeContent = ({ camisetas }) => {
  const camiseta = camisetas.filter((camiseta) => camiseta.nameId === "basq-3");

  /*React.useEffect(() => {
    async function fetchProdutoCamiseta(url) {
      const response = await fetch(url);
      const json = await response.json();
      setProdutoCamiseta(json);
    }
    fetchProdutoCamiseta(`/static/json/produtos.json`);
  }, [])*/

  console.log(`Aqui`, camiseta[0])


  return (
    <section className={styles.container}>
      <div className={styles.mainContent}>
       <div className={styles.mainContainer1}>
         <div className={styles.mainContainer1Item}>
            <h3>{camiseta[0].name}</h3>
         </div>
         <div className={styles.mainContainer1Item2}>
           <div>
            <img src={camiseta[0].image[0]} alt="" />
           </div>
           <div className={styles.containerPrice}>
            <div className={styles.priceStyle}>
              <span className={styles.price}>R$ {camiseta[0].price}</span>
            </div>
            
            <span><span className={styles.oldPrice}>R$ {(camiseta[0].OldPrice).toFixed(2)}</span> ou 12x de <span className={styles.parcelas}>R$ {(camiseta[0].OldPrice / 12).toFixed(2)}</span></span>
          </div>
         </div>
       </div>
       <div className={styles.mainContainer2}>
          bb
       </div>
      </div>
    </section>
  )
}

export default HomeContent;

