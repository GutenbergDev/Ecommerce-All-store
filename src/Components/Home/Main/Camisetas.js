import React from 'react';
import styles from './Camisetas.module.css';

const Camisetas = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className={styles.container}>
      aaa
    </section>
  )
}

export default Camisetas;
