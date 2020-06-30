import React, { useContext } from 'react';
import './Header.sass';
// icono
import flecha from '../../assets/images/flecha.png';
import NotasContext from '../../context/notas/notasContext';

const Header = () => {
  const notasContext = useContext(NotasContext);

  const { notas } = notasContext;

  const notaDestacada = notas[notas.length - 1];

  if (notas <= 0) {
    return <p>Cargando</p>;
  } else {
    return (
      <div id='header'>
        <img src={notaDestacada.headerImage} alt='imagen destacada' />
        <div className='info-destacada'>
          <div>
            <span className='category'>{notaDestacada.category}</span>
            <br />
            <h1 className='title'>{notaDestacada.title}</h1>
            <div className='leer_mas'>
              <img src={flecha} alt='icono flecha' />
              <span>Leer nota</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
