import React from 'react';
import styles from '../EmailCadastro/EmailCadastro.module.css';
import correioEletronico from '../../img/carta.png';
import { Link } from 'react-router-dom';

const EmailCadastro = () => {


  return (
    <section className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.img}>
          <img src={correioEletronico} />
        </div>
        <div className={styles.text}>
          <h4>RECEBA AS NOVIDADES DA NIKE</h4> 
          <p>Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.</p>
        </div>
        <div className={styles.btnContainer}>
            <Link to={``} className={styles.btnMain}>
              <span className={styles.btnMainText}>Cadastre-se</span>
            </Link>
          </div>
      </div>
    </section>
  )
}

export default EmailCadastro;
