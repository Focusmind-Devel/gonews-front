import React, { useState, Fragment } from 'react';
import Card from '../Card/Card';
import './Categoria.sass';
// icono
import flecha from '../../assets/images/flecha.png';

function Categoria({ notas }) {
  const [actualidad, setActualidad] = useState('');
  const [politica, setPolitica] = useState('');
  const [espectaculos, setEspectaculos] = useState('');

  const getAttibuteValue = (e) => {
    const categoria = document.querySelectorAll('.categoria');

    for (let i = 0; i < categoria.length; i++) {
      if (categoria[i].dataset.value === 'actualidad') {
        setActualidad('actualidad');
      }

      if (categoria[i].dataset.value === 'politica') {
        setPolitica('politica');
      }

      if (categoria[i].dataset.value === 'espectaculos') {
        setEspectaculos('espectaculos');
      }
    }
  };

  return (
    <Fragment>
      <div className='categoria' ref={getAttibuteValue} data-value='actualidad'>
        <div className='titulo'>
          <img src={flecha} alt='icono flecha' />
          <span>{actualidad}</span>
        </div>
        <div className='notas_categoria'>
          {notas
            .filter((item) => item.category === actualidad)
            .slice(0, 3)
            .map((filtered) => (
              <Card key={filtered.id} item={filtered} />
            ))}
        </div>
      </div>

      <div className='categoria' ref={getAttibuteValue} data-value='politica'>
        <div className='titulo'>
          <img src={flecha} alt='icono flecha' />
          <span>{politica}</span>
        </div>
        <div className='notas_categoria'>
          {notas
            .filter((item) => item.category === politica)
            .slice(0, 3)
            .map((filtered) => (
              <Card key={filtered.id} item={filtered} />
            ))}
        </div>
      </div>

      <div
        className='categoria'
        ref={getAttibuteValue}
        data-value='espectaculos'
      >
        <div className='titulo'>
          <img src={flecha} alt='icono flecha' />
          <span>{espectaculos}</span>
        </div>
        <div className='notas_categoria'>
          {notas
            .filter((item) => item.category === espectaculos)
            .slice(0, 3)
            .map((filtered) => (
              <Card key={filtered.id} item={filtered} />
            ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Categoria;
