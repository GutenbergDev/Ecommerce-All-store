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
  return (
    <section className={styles.produtosNew}>
    
    </section>
  )
}

export default ProdutosNew;
