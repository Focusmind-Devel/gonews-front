import React from 'react';
// iconos redes sociales
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
// estilos
import './SocialLinks.sass';

const SocialLinks = () => {
  return (
    <div id='social_icons_top'>
      <a
        href='https://www.instagram.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={instagram} alt='instagram icon' />
      </a>
      <a
        href='https://www.facebook.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={facebook} alt='facebook icon' />
      </a>
      <a
        href='https://twitter.com/home'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={twitter} alt='twitter icon' />
      </a>
    </div>
  );
};

export default SocialLinks;
