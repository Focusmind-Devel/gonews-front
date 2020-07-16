import React, { Fragment, useContext } from 'react';
import NotasContext from '../../context/notas/notasContext';
import Busqueda from '../../components/Busqueda/Busqueda';
import './Search.sass';
import Resultados from '../../components/Resultados/Resultados';
import styled from 'styled-components';
import Paginacion from 'react-js-pagination';
import { ReactComponent as FirstPage } from '../../assets/images/first-page.svg';
import { ReactComponent as LastPage } from '../../assets/images/last-page.svg';
import { ReactComponent as NextPage } from '../../assets/images/next-page.svg';
import { ReactComponent as PrevPage } from '../../assets/images/prev-page.svg';

const NotFoundResult = styled.div`
  color: #e71d36;
  font-size: 21px;
  padding: 2rem 0 10rem 0;
`;

const Search = ({ match }) => {
  const notasContext = useContext(NotasContext);

  const text = match.params.text;

  const { notas, count, getNextPage, currentPage } = notasContext;

  const encabezadoStyle = {
    backgroundColor: '#02182B',
    color: '#f2f2f2',
    padding: '4rem 0',
  };

  const numberOfPages = Math.ceil(count / 6);
  console.log(numberOfPages);

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
          <p className='total-resultados'>
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
          <Paginacion
            activePage={currentPage}
            totalItemsCount={count}
            itemsCountPerPage={6}
            pageRangeDisplayed={5}
            onChange={(pageNumber) => getNextPage(pageNumber, text)}
            firstPageText={<FirstPage />}
            lastPageText={<LastPage />}
            prevPageText={<PrevPage />}
            nextPageText={<NextPage />}
          />
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
