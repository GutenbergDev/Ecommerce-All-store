import React from 'react';
import Head from '../Head';
import styles from './Home.module.css';
import HomeContent from './Main/HomeContent';
import SlideMain from './SlideMain/SlideMain';
import SlidePromo from './SlidePromo/SlidePromo';
import data from '../../json/produtos.json';


const Home = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {

    setProdutos(data)
  
  }, [])

  if(produtos === null) return null;

  return (
    <>
      <section className={styles.slideMain}>
      <Head title={`Shoes | Home`} description={`Descrição do site Ranek`} />
        <SlideMain slideMain={produtos} />
      </section>
      <main>
        <HomeContent sectionNews={produtos} />
        <SlidePromo sectionPromo={produtos} />
      </main>
    </>
  )
}

export default Home;
