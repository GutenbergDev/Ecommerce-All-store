import React from 'react';
import Head from '../Head';
import styles from './Home.module.css';
import SlideMain from './SlideMain/SlideMain';

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

  return (
    <>
      <div className={styles.slideMain}>
      <Head title={`Shoes | Home`} description={`Descrição do site Ranek`} />
        <SlideMain slideMain={produtos} />
      </div>
    </>
  )
}

export default Home;
