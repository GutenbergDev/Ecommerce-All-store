import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../img/logo/logo.svg';


const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/" end><img src={logo} /></NavLink> 
      </div>
      <nav className={`${styles.nav}`}> 
        <ul>
          <li>
            <NavLink className={styles.link} to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="marcas">Marcas</NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="contato">Contato</NavLink>
          </li>
          <li>
            <NavLink className={`${styles.linkC}`} to="criarConta">Criar Conta</NavLink>
          </li>
        </ul>
        
      </nav>
      </div>
    </section>
  )
}

export default Header
;