import React from 'react';
import { useParams } from 'react-router';
import styles from './Produto.module.css';



const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { userId } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        console.log(`Aqui`, json)
        setProduto(json.find(item => item.userId));
      } catch (erro) {
        setError('Um erro ocorreu')
      } finally {
        setLoading(false);
      }
    }

    fetchProduto(`/static/json/slideMain.json`);
  }, [userId]);

  if(loading) return <div>Carregando...</div>;
  if(error) return <p>{error}</p>;
  if(produto === null) return null;
  
  return (
    <section className={styles.produto}>
      <div className={styles.produtoContainer}>
        <div className={styles.item1}>
          <h1>{produto.userId}</h1>
          <img src={produto.image[0]} />
          {console.log(produto)}
        </div>
        <div className={styles.item2}>

        </div>
      </div>
    </section>
  )
}

export default Produto;
