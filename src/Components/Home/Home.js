import React from 'react';
import styles from './Home.module.css';
import Produto from './Produto';
import SlideMain from './SlideMain';

const Home = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    async function fetchProdutos(url) {
      const response = await fetch(url);
      const json = await response.json();
      setProdutos(json)
    }
    fetchProdutos(`/static/json/produtos.json`);
  }, [])

  if(produtos === null) return null;
  console.log(produtos)

  return (
    <>
      <div className={styles.slideMain}>
        <SlideMain slideMain={produtos} />
      </div>
      
    </>
  )
}

export default Home;
