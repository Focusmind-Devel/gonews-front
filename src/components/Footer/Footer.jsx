import React, { Fragment } from 'react';
import './Footer.sass';
import SocialLinks from '../SocialLinks/SocialLinks';
import logo from '../../assets/images/Logo.png';
import arrowUp from '../../assets/images/arrowUp.png';
import { Link } from 'react-router-dom';

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
                <Link to={'/actualidad'}>Actualidad</Link>
              </li>
              <li className='menu_item'>
                <Link to={'/economia'}>Economia</Link>
              </li>
              <li className='menu_item principal'>
                <Link to={'/politica'}>Politica</Link>
              </li>
              <li className='menu_item principal'>
                <Link to={'/espectaculos'}>Espectaculos</Link>
              </li>
              <li className='menu_item principal'>
                <Link to={'/deportes'}>Deportes</Link>
              </li>
            </ul>
          </div>
          {/* Menu parte 2 */}
          <div className='bottom_menu'>
            <p className='menu_title'>Mas +</p>
            <ul className='bottom_menu_1'>
              <li className='menu_item adicional'>
                <Link to={'/lifestyle'}>Lifestyle</Link>
              </li>
              <li className='menu_item adicional'>
                <Link to={'/comidas'}>Comidas</Link>
              </li>
              <li className='menu_item adicional'>
                <Link to={'/opinion'}>Opinion</Link>
              </li>
              <li className='menu_item adicional'>
                <Link to={'/reportaje'}>Reportaje</Link>
              </li>
            </ul>
          </div>
          <a className='email' href='mailto:hola@gonews.com'>
            hola@<span>gonews</span>.com
          </a>
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
