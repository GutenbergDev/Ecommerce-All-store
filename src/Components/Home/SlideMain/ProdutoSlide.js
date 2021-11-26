import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './ProdutoSlide.module.css';

const ProdutoSlide = () => {
  const [produtosSlide, setProdutosSlide] = React.useState(null)


  React.useEffect(() => {
    async function fetchProdutosSlide(url) {
      const response = await fetch(url);
      const json = await response.json();

      setProdutosSlide(json);
    }

    fetchProdutosSlide(`/static/json/ProdutosSlide.json`);
  }, []);

  if(produtosSlide === null) return null;
//if(newProdutos === null) return null;
  return (
    <section className={styles.containerProduto}>
      <div className={styles.produto}>
        {produtosSlide.map((produto) => (
          <Link 
            className={`${styles.containerItem} animeLeft`}
            to={`produto/${produto.id}`}
          >
            <div>
              <img src={produto.image[0]} />
            </div>
            <div className={`${styles.dadosItem}`}>
              <span className={styles.oldPrice}>R$ {produto.OldPrice}.00</span>
              <span className={styles.price}>R$ {produto.price}</span>
            </div>
          </Link>
        ))

        }
      </div>
    </section>
  )
}

export default ProdutoSlide;

/*{produtosSlide.map((produtos) => (
  <div
    className={styles.produto}
    key={produtos.id}
  >
    <Link 
      className={styles.containerItem}
      to={`produto/${produtos.id}`}
    >
      <div>
        <img src={produtos.image[0]} />
      </div>
    </Link>
  </div>
))
}*/