import React, { useState } from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import Busqueda from '../Busqueda/Busqueda';
// logo
import mainlogo from '../../assets/images/Logo.png';
import burguerMenu from '../../assets/images/menu-plegado.png';
import burguerMenuOpen from '../../assets/images/menu-desplegado.png';
// estilos
import './Topbar.sass';

const Topbar = ({ isOpen }) => {
  const [burguer, setBurguer] = useState(false);

  const busquedaGrid = (grid) => {
    const socialIcons = document.getElementById('social_icons_top');

    if (grid === '10 / 13') {
      socialIcons.style.gridColumn = '9/10';
    } else {
      socialIcons.style.gridColumn = '10/12';
    }
  };

  const burguerMenuClick = () => {
    if (burguer) {
      setBurguer(false);
    } else {
      setBurguer(true);
    }

    isOpen(burguer);
  };

  return (
    <div className='top_nav'>
      <div className='main_top'>
        {burguer === true ? (
          <img
            className='burguer'
            src={burguerMenuOpen}
            alt='burguer menu'
            onClick={burguerMenuClick}
          />
        ) : (
          <img
            className='burguer'
            src={burguerMenu}
            alt='burguer menu'
            onClick={burguerMenuClick}
          />
        )}
        <div id='logo'>
          <a href='/'>
            <img src={mainlogo} alt='go news logo' />
          </a>
        </div>
        <SocialLinks />
        <Busqueda busquedaGrid={busquedaGrid} />
      </div>
    </div>
  );
};

export default Topbar;
