import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import Busqueda from '../Busqueda/Busqueda';
// logo
import mainlogo from '../../assets/images/Logo.png';
// estilos
import './Topbar.sass';

const Topbar = () => {
  const busquedaGrid = (grid) => {
    const socialIcons = document.getElementById('social_icons_top');

    if (grid === '10 / 13') {
      socialIcons.style.gridColumn = '9/10';
    } else {
      socialIcons.style.gridColumn = '10/12';
    }
  };

  return (
    <div className='top_nav'>
      <div className='main_top'>
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
