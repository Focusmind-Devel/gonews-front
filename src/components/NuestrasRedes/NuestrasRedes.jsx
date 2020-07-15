import React, { useState } from 'react';
import './NuestrasRedes.sass';
// icono
import flecha from '../../assets/images/flecha.png';

import { ReactComponent as Face } from '../../assets/images/click-fb.svg';
import { ReactComponent as Insta } from '../../assets/images/click-ig.svg';
import { ReactComponent as Twit } from '../../assets/images/click-tw.svg';

import Instagram from '../../components/SocialPosts/media/Instagram';
import Facebook from '../../components/SocialPosts/media/Facebook';

import styled from 'styled-components';

const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NuestrasRedes = () => {
  const [dataName, setdataName] = useState('insta');

  const handleClick = (e) => {
    const attr = e.target.getAttribute('data-name');
    setdataName(attr);
  };

  console.log(dataName);

  return (
    <div className='social_media'>
      <div className='container'>
        <DisplayFlex>
          <div className='titulo'>
            <img src={flecha} alt='icono flecha' />
            <span>Posteos En nuestras Redes Sociales</span>
          </div>
          <div className='social-btn'>
            <Insta data-name='insta' onClick={handleClick} />
            <Face data-name='fb' onClick={handleClick} />
            <Twit data-name='twit' onClick={handleClick} />
          </div>
        </DisplayFlex>
      </div>
      <div className='container'>
        {dataName === 'insta' ? <Instagram /> : <Facebook />}
      </div>
    </div>
  );
};

export default NuestrasRedes;
