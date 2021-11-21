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

    setTimeout(() => {
      setPosition(-(width * active))
      if(active < slideMain.length - 1) {
        setActive(active + 1)
      } else if(active === 2) {
        setActive(0)
      }
    }, 5000)
  }, [active])
  

  return (
    <section className={`${styles.containerS}`}>
      <div 
        ref={contentRef}
        className={styles.content} 
        style={{ transform: `translateX(${position}px)` }}
      >
        {slideMain.map((produto) => 
          (<div 
            className={styles.item} 
            key={produto.id}
            >
            <div>
              <Link 
                to={`produto/${produto.id}`} 
                className={styles.linkSlideContainer}
                >
                  <div className={styles.linkSlideItem}>
                    <div>
                      <h1 className={styles.h1}>{produto.name}</h1>
                      <h2 className={styles.h2}>{produto.subName}</h2>
                    </div>  
                    <div>
                      <p className={styles.p}>{produto.description}</p>
                    </div>
                  </div>
                  <div className={styles.linkSlideItemTwo}>
                    <img src={produto.image[0]} alt="" />
                  </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <nav className={`${styles.nav}`}>

      </nav>
    </section>
  )
}

export default SlideMain;
