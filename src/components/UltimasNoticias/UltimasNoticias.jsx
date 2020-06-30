import React, { useContext } from 'react';
import Card from '../Card/Card';
import './UltimasNoticias.sass';
import NotasContext from '../../context/notas/notasContext';

const UltimasNoticias = () => {
  const notasContext = useContext(NotasContext);

  const { notas } = notasContext;

  return (
    <section id='ultimas-notas'>
      <div className='container'>
        <h1>Ultimas Noticias</h1>
        <div className='ultimas_notas'>
          {notas.slice(0, 6).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltimasNoticias;
