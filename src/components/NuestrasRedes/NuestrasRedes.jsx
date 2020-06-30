import React from 'react';
import './NuestrasRedes.sass';
// icono
import flecha from '../../assets/images/flecha.png';

const NuestrasRedes = () => {
  return (
    <div className='social_media'>
      <div className='container titulo'>
        <img src={flecha} alt='icono flecha' />
        <span>Posteos En nuestras Redes Sociales</span>
      </div>
    </div>
  );
};

export default NuestrasRedes;
