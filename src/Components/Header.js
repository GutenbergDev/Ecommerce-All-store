import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../Assets/img/logo.svg';
import UseMedia from './Hooks/UseMedia';


const Header = () => {
  const mobile = UseMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false);
console.log(mobile)


  return (
    <header className={styles.header}>
      
      
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive} container`}> 

      
        <Link className={`${mobile ? styles.containerMenuMobile : styles.logo}`} to="/" arial-label="Logo - Home" end>
          <Logo />
          {mobile &&
            <button 
              aria-label="Menu" 
              className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
              onClick={() => setMobileMenu(!mobileMenu)}>  
            </button>
          }
        </Link> 

        <ul>
          <NavLink className={styles.link} to="/" end>Home</NavLink>
          <NavLink className={styles.link} to="marcas">Marcas</NavLink>
          <NavLink className={styles.link} to="contato">Contato</NavLink> 
          <NavLink className={`${styles.linkC}`} to="criarConta">Criar Conta</NavLink>

          
        </ul>
      </nav>
      <div className={styles.toggle}>
        <div className={styles.toggleLine}></div>
        <div className={styles.toggleLine}></div>
        <div className={styles.toggleLine}></div>
      </div>
  </header>
  )
}

export default Header
;