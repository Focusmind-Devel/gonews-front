import React, { Fragment, useContext } from 'react';
import NotasContext from '../../context/notas/notasContext';
import Busqueda from '../../components/Busqueda/Busqueda';
import './Search.sass';
import Resultados from '../../components/Resultados/Resultados';

const Search = ({ match }) => {
  const notasContext = useContext(NotasContext);

  const text = match.params.text;

  const { notas, count } = notasContext;

  console.log(notas);
  console.log(count);

  const encabezadoStyle = {
    backgroundColor: '#02182B',
    color: '#f2f2f2',
    padding: '4rem 0',
  };

  return (
    <Fragment>
      <div style={encabezadoStyle} className='search-header'>
        <div className='container'>
          <h3>Resultados de la búsqueda</h3>
          <Busqueda />
        </div>
      </div>
      <div className='container'>
        <p>
          {count} resultados encontrados para {text}
        </p>
        <div className='resultados'>
          {notas
            .filter((item) => item.title.includes(text))
            .map((filtered) => (
              <Resultados key={filtered.id} item={filtered} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
