import React, { Fragment } from 'react';
import './Categoria.sass';
import Actualidad from './Cat/Actualidad';
import Politica from './Cat/Politica';
import Espectaculos from './Cat/Espectaculos';

function Categoria({ notas }) {
  return (
    <Fragment>
      <Actualidad notas={notas} />
      <Politica notas={notas} />
      <Espectaculos notas={notas} />
      <h1>Test</h1>
    </Fragment>
  );
}

export default Categoria;
