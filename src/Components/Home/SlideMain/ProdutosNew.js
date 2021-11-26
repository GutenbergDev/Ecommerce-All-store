import React from 'react';
import { useParams } from 'react-router';
import styles from './ProdutosNew.module.css';

const ProdutosNew = () => {
  const [produto, setProduto] = React.useState(null);
  const { nameId } = useParams()

  React.useEffect(() => {
    async function fetchProduto(url) {
      const response = await fetch(url);
      const json = await response.json();
      setProduto(json.find(item => item.nameId === nameId));
    }
    fetchProduto(`/static/json/ProdutosSlide.json`);
  }, [nameId])
    console.log(produto)
    if(produto === null) return null;
  return (
    <section className={styles.produtosNew}>
      <div className={styles.containerProdutoNew}>
        <div className={styles.containerProduto1}>
          <div className={styles.produtoImageMini}>
            <img src={produto.image[1]} alt=""/>
            <img src={produto.image[2]} alt=""/>
            <img src={produto.image[3]} alt=""/>
            <img src={produto.image[4]} alt=""/>
          </div>
          <div className={styles.produtoImage}>
            <img src={produto.image[0]} alt=""/>
          </div>
        </div>
        <div className={styles.containerProduto2}>
          lll
        </div>
      </div>
    </section>
  )
}

export default ProdutosNew;
