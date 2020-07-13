import React, { Fragment, useContext } from 'react';
import NotasContext from '../../context/notas/notasContext';
import Busqueda from '../../components/Busqueda/Busqueda';
import './Search.sass';
import Resultados from '../../components/Resultados/Resultados';
import styled from 'styled-components';

const NotFoundResult = styled.div`
  color: #e71d36;
  font-size: 21px;
  padding: 2rem 0 10rem 0;
`;

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
      {count >= 1 ? (
        <div className='container'>
          <p>
            {count} resultados encontrados para {text}
          </p>
          <div className='resultados'>
            {notas
              .reverse()
              .filter(
                (item) =>
                  item.title.toLowerCase().includes(text.toLowerCase()) ||
                  item.tags.indexOf(text) ||
                  item.content.toLowerCase().includes(text.toLowerCase())
              )
              .map((filtered) => (
                <Resultados key={filtered.id} item={filtered} />
              ))}
          </div>
        </div>
      ) : (
        <NotFoundResult className='container'>
          <h4 style={{ width: '595px' }}>
            Lo sentimos, no encontramos resultados para la búsqueda de {text}
          </h4>
        </NotFoundResult>
      )}
    </Fragment>
  );
};

export default Search;
