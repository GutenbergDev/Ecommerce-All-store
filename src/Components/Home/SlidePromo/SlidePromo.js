import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SlidePromo.module.css';
import LeftArrow from "../../../img/left-arrow.png";
import RightArrow from "../../../img/right-arrow.png";
import Slider from 'react-slick';


const SlidePromo = ({ sectionPromo }) => {
  const carousel = React.useRef(null);

  const promocao = sectionPromo.filter((promo) => promo.price <= 280);
  console.log(`promo: `, promocao)

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  let settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 4,
    slidesToShow: 4,
    prevArrow: <SlickArrowLeft className={styles.LeftArrow} />,
    nextArrow: <SlickArrowRight className={styles.RightArrow} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>Ofertas Imperdíveis</h3>
      </div>
      <Slider
        className={styles.carousel}
        ref={carousel}
        {...settings}
      >
        {promocao.map((promo) => (
          <div
            className={styles.item}
            key={promo.nameId}
          >
            <div>
              <div className={`${styles.linkContainerPromo}`}>
                <Link 
                  lassName={styles.imgWidth} 
                  to={`/promocao/${promo.nameId}`}
                >
                  <img src={promo.image[0]} alt="" />
                </Link>
                <div className={styles.nameproduct}>
                  <h3>{promo.name}</h3>
                </div>
                <div className={`${styles.dadosItem}`}>
                  <span className={styles.oldPrice}>R$ {promo.OldPrice}.00</span>
                  <span className={styles.price}>
                    R$ {((promo.OldPrice) - (promo.discount / 100 * promo.OldPrice)).toFixed(2)}
                  </span>
                </div>
                <div className={styles.desconto}>
                  <p>{-(promo.discount)}%</p>
                </div>
              </div>
            </div>  
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default SlidePromo;
