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
    setTimeout(() => {
      const { width } = contentRef.current.getBoundingClientRect();
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
          (<div className={styles.item}>
            <div>
              <Link 
                to={`produto/${produto.id}`} 
                key={produto.id}>
                  <div>
                    <h1>{produto.name}</h1>
                    <h2>{produto.subName}</h2>
                    <p>{produto.description}</p>
                  </div>
                  <div>
                    <h1>Aqui a foto</h1>
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
