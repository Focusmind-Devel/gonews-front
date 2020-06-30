import React, { Fragment } from 'react';
import './Footer.sass';
import SocialLinks from '../SocialLinks/SocialLinks';
import logo from '../../assets/images/Logo.png';
import arrowUp from '../../assets/images/arrowUp.png';

function Footer() {
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
                <a href='/'>Actualidad</a>
              </li>
              <li className='menu_item'>
                <a href='/'>Economia</a>
              </li>
              <li className='menu_item'>
                <a href='/'>Politica</a>
              </li>
              <li className='menu_item'>
                <a href='/'>Espectaculos</a>
              </li>
              <li className='menu_item'>
                <a href='/'>Deportes</a>
              </li>
            </ul>
          </div>
          {/* Menu parte 2 */}
          <div className='bottom_menu'>
            <p className='menu_title'>Mas +</p>
            <ul className='bottom_menu_1'>
              <li className='menu_item'>
                <a href='/'>Lifestyle</a>
              </li>
              <li className='menu_item'>
                <a href='/'>Comidas</a>
              </li>
              <li className='menu_item'>
                <a href='/'>Opnion</a>
              </li>
              <li className='menu_item'>
                <a href='/'>Reportajes</a>
              </li>
            </ul>
          </div>
          <img src={arrowUp} alt='back to top' />
        </div>
      </div>
      <footer>
        <div className='container'>
          <div className='copy'>
            <p>© Copyright Gonews. Todos los derechos reservados.</p>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
