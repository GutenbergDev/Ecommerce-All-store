import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SlideMain.module.css';

const SlideMain = ({ slideMain }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  function slidePrev() {

  }

  function slideNext() {
    const {width} = contentRef.current.getBoundingClientRect();
    setPosition(position - width);
  }

  return (
    <section className={`${styles.containerS}`}>
      <div 
        ref={contentRef}
        className={styles.content} 
        style={{ transform: `translateX(${position}px)` }}
      >
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
        <button onClick={slidePrev}>‹</button>
        <button onClick={slideNext}>›</button>
      </nav>
    </section>
  )
}

export default SlideMain;
