import React, { useState } from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import Busqueda from '../Busqueda/Busqueda';
// logo
import mainlogo from '../../assets/images/Logo.png';
import burguerMenu from '../../assets/images/menu-plegado.png';
import burguerMenuOpen from '../../assets/images/menu-desplegado.png';
// estilos
import './Topbar.sass';
import { Link } from 'react-router-dom';

const Topbar = ({ isOpen, menuOpen }) => {
  const [burguer, setBurguer] = useState(false);

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
      <div className='main_top' id='top'>
        {menuOpen ? (
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
          <Link to='/'>
            <img src={mainlogo} alt='go news logo' />
          </Link>
        </div>
        <SocialLinks />
        <Busqueda />
      </div>
    </div>
  );
};

export default Topbar;
