import React from 'react';
import { useParams } from 'react-router';
import Head from '../Head';
import styles from './Produto.module.css';



const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { nameId } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        console.log(`Aqui`, json)
        setProduto(json.find(item => item.nameId === nameId));
      } catch (erro) {
        setError('Um erro ocorreu');
      } finally {
        setLoading(false);
      }
    }

    fetchProduto(`/static/json/produtos.json`);
    console.log(`teste`, produto)
  }, [nameId]);
  

  if(loading) return <div>Carregando...</div>;
  if(error) return <p>{error}</p>;
  if(produto === null) return null;
  
  return (
    <section className={styles.produto}>
      <Head title={`Produto | ${produto.nome}`} description={`Shoes | Esse é um produto: ${produto.name}`} />

      <div className={styles.produtoContainer}>
        <div className={styles.item1}>
          <img src={produto.image} />
          {console.log(`Aqui`, produto)}
        </div>
        <div className={styles.item2}>
          <h1>{produto.name}</h1>
        </div>
      </div>
    </section>
  )
}

export default Produto;
