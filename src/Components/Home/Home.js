import React from 'react';
import styles from './Home.module.css';
import SlideMain from './SlideMain';

const Home = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch(`./static/json/slideMain.json`)
    .then((response) => response.json())
    .then(json => setProdutos(json));
  }, [])

  if(produtos === null) return null;
  console.log(produtos)

  return (
    <div className={styles.slideMain}>
      <SlideMain slideMain={produtos} />
    </div>
  )
}

export default Home;
