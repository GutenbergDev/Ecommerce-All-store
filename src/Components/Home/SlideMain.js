import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SlideMain.module.css';

const SlideMain = ({ slideMain }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  /*React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active))
  }, [active])*/

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active))
  }, [active])

  function slidePrev() {
    if(active > 0) setActive(active - 1);
  }

  function slideNext() {
    if(active < slideMain.length - 1) {
      setActive(active + 1)
    } 
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
            <div>
              <Link 
                to={`produto/${produto.id}`} 
                key={produto.id}>
                  <p>{produto.name}</p>
              </Link>
            </div>
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
