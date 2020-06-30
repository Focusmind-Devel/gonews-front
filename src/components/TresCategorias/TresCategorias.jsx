import React, { useContext } from 'react';
import Categoria from '../Categoria/Categoria';
// estilos
import './TresCategorias.sass';
import NotasContext from '../../context/notas/notasContext';

const TresCategorias = () => {
  const notasContext = useContext(NotasContext);

  const { notas } = notasContext;

  return (
    <section id='segundo_bloque'>
      <div className='container'>
        <Categoria notas={notas} />
      </div>
    </section>
  );
};

export default TresCategorias;
