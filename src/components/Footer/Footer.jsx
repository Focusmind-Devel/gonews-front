import React, { Fragment } from 'react';
import './Footer.sass';
import SocialLinks from '../SocialLinks/SocialLinks';
import logo from '../../assets/images/Logo.png';
import arrowUp from '../../assets/images/arrowUp.png';
import mailIcon from '../../assets/images/mail.png';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fragment>
      <div id='footer_menu'>
        <div className='container'>
          <a href='/' className='logo'>
            <img src={logo} alt='logo' />
          </a>
          {/* Menu Patte 1 */}
          <div className='bottom_menu'>
            <p className='menu_title'>Secciones</p>
            <ul className='bottom_menu_1'>
              <li className='menu_item'>
                <Link to={'/actualidad'}>Actualidad</Link>
              </li>
              <li className='menu_item'>
                <Link to={'/economía'}>Economía</Link>
              </li>
              <li className='menu_item'>
                <Link to={'/política'}>Política</Link>
              </li>
              <li className='menu_item'>
                <Link to={'/espectáculos'}>Espectáculos</Link>
              </li>
              <li className='menu_item'>
                <Link to={'/deportes'}>Deportes</Link>
              </li>
            </ul>
          </div>
          {/* Menu parte 2 */}
          <div className='bottom_menu'>
            <p className='menu_title'>Mas +</p>
            <ul className='bottom_menu_1'>
              <li className='menu_item'>
                <Link to={'/lifestyle'}>Lifestyle</Link>
              </li>
              <li className='menu_item'>
                <Link to={'/comidas'}>Comidas</Link>
              </li>
              <li className='menu_item'>
                <Link to={'/opinión'}>Opinión</Link>
              </li>
              <li className='menu_item'>
                <Link to={'/reportaje'}>Reportaje</Link>
              </li>
            </ul>
          </div>
          <SocialLinks />
          <a className='email' href='mailto:hola@gonews.com'>
            <img src={mailIcon} alt='' />
            hola@<span>gonews</span>.com
          </a>
          <img
            src={arrowUp}
            alt='back to top'
            className='back-to-top'
            onClick={scrollToTop}
          />
        </div>
      </div>
      <footer>
        <div className='container'>
          <div className='copy'>
            <p>© Copyright Gonews. Todos los derechos reservados.</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '22px',
                fontFamily: 'Muli-Italic',
              }}
            >
              <span>Seguinos en:</span>
              <SocialLinks />
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
