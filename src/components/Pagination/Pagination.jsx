import React, { useContext, Fragment } from 'react';
import NotasContext from '../../context/notas/notasContext';
import './Pagination.sass';

const Pagination = ({ pages }) => {
  const notasContext = useContext(NotasContext);

  const { currentPage, getNextPage } = notasContext;

  const pageLinks = [];

  for (let i = 1; i <= pages; i++) {
    let page = currentPage;

    let active = page === i ? 'active' : '';
    page = page + 1;

    pageLinks.push(
      <li
        key={i}
        className={`paginas ${active}`}
        onClick={() => getNextPage(i, 'nota')}
      >
        {i}
      </li>
    );
  }

  return (
    <Fragment>
      <ul className='pagination'>{pageLinks}</ul>
    </Fragment>
  );
};

export default Pagination;
