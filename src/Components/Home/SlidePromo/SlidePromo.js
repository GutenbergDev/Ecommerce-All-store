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
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <Slider
        className={styles.carousel}
        ref={carousel}
        {...settings}
      >
        {promocao.map((promo) => (
          <Link
            className={styles.item}
            key={promo.nameId}
            to={`/promocao/${promo.nameId}`}
          >
            <div>
              <div className={`${styles.linkContainerPromo}`}>
                <div className={styles.imgWidth}>
                  <img src={promo.image[0]} alt="" />
                </div>
                <div className={styles.nameproduct}>
                  <h3>{promo.name}</h3>
                </div>
                <div className={`${styles.dadosItem}`}>
                  <span className={styles.oldPrice}>R$ {promo.OldPrice}.00</span>
                  <span className={styles.price}>R$ {(promo.price).toFixed(2)}</span>
                </div>
              </div>
            </div>  
          </Link>
        ))}
      </Slider>
    </section>
  )
}

export default SlidePromo;
