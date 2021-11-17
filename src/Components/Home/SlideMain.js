import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SlideMain.module.css';

const SlideMain = ({ slideMain }) => {

  return (
    <section className={`container`}>
      <div className={styles.content}>
        {slideMain.map((produto) => 
          (<div className={styles.item}>
            <Link 
              to={`produto/${produto.id}`} 
              key={produto.id}>{produto.name}
            </Link>
          </div>
        ))}
      </div>
      <nav className={`${styles.nav}`}>
        <button>‹</button>
        <button>›</button>
      </nav>
    </section>
  )
}

export default SlideMain;
