import React from 'react';
// iconos redes sociales
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/images/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
// estilos
import './SocialLinks.sass';

const SocialLinks = () => {
  return (
    <div id='social_icons_top'>
      <a
        href='https://twitter.com/home'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Twitter className='social_icon' />
      </a>
      <a
        href='https://www.instagram.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Instagram className='social_icon' />
      </a>
      <a
        href='https://www.facebook.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Facebook className='social_icon' />
      </a>
    </div>
  );
};

export default SocialLinks;
