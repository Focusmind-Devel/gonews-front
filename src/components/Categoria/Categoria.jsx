import React, { Fragment, useContext } from 'react';
import './Categoria.sass';
import NotasContext from '../../context/notas/notasContext';
import Cat from './Cat';

function Categoria({ notas }) {
  const notasContext = useContext(NotasContext);

  const { categories } = notasContext;

  if (!categories) {
    return <h1>Cargando</h1>;
  } else {
    return (
      <Fragment>
        {Object.entries(categories).map((item, index) => (
          <Cat key={index} item={item} />
        ))}
      </Fragment>
    );
  }
}

export default Categoria;
