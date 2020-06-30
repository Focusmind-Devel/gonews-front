import React, { useContext } from 'react';
import './HeaderCategory.sass';
// icono
import flecha from '../../assets/images/flecha.png';
import NotasContext from '../../context/notas/notasContext';

const HeaderCategory = ({ category }) => {
  const notasContext = useContext(NotasContext);

  const { notas } = notasContext;

  const result = notas.filter((item) => item.category === category);

  const notaDestacada = result[result.length - 1];

  console.log(result);

  if (result <= 0) {
    return <h1>No hay notas disponibles</h1>;
  } else {
    return (
      <div id='header'>
        <img src={notaDestacada.headerImage} alt='imagen destacada' />
        <div className='info-destacada'>
          <div>
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

export default HeaderCategory;
