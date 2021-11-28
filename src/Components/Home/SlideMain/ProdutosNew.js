import React from 'react';
import { useParams } from 'react-router';
import styles from './ProdutosNew.module.css';

const ProdutosNew = () => {
  const [produto, setProduto] = React.useState(null);
  const [produtoIndex, setProdutoIndex] = React.useState(null);
  const { nameId } = useParams()

  React.useEffect(() => {
    async function fetchProduto(url) {
      const response = await fetch(url);
      const json = await response.json();
      setProduto(json.find(item => item.nameId === nameId));
    }
    fetchProduto(`/static/json/ProdutosSlide.json`);
  }, [nameId])

  React.useEffect(() => {
    if(produto) {
      setProdutoIndex(produto.image[0])
    }
  }, [produto]);

  console.log(`Aqui produtoIndex:`, produtoIndex)
  console.log(`Aqui produto:`, produto)

    function handleClick(item) {
        setProdutoIndex(item.target.src)
    }

    //function handleClick(item) {
    //    setProdutoIndex(item.target.src)
    //}
    ////console.log(produto)


  if(produto === null) return null;
  return (
    <section className={styles.produtosNew}>
      <div className={`${styles.containerProdutoNew} animeLeft`}>
        <div className={`${styles.containerProduto1}`}>
          <h2>{produto.name}</h2>
        </div>
        <div className={styles.containerProduto2}>
          <div className={styles.produtoImageMini}>
          {produto.image.map((foto, index) => (
              <img 
                key={index} 
                src={foto} 
                onClick={handleClick} 
                className={styles.imageActive}
              /> 
            )
          )}
          </div>
          <div className={`${styles.produtoImage}`}>
            <img src={produtoIndex}/>
          </div>
        </div>
        <div className={styles.containerProduto3}>
          <div className={styles.containerPrice}>
            <div className={styles.priceStyle}>
              <span className={styles.price}>R$ {produto.price}</span>
            </div>
            <span className={styles.oldPrice}>R$ {(produto.OldPrice).toFixed(2)}</span>
            <span>ou 12x de <span className={styles.parcelas}>R$ {(produto.OldPrice / 12).toFixed(2)}</span></span>
          </div>
          <div>

          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProdutosNew;
