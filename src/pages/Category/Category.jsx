import React, { Fragment, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Category.sass';
import NotasContext from '../../context/notas/notasContext';
import Card from '../../components/Card/Card';
import HeaderCategory from '../../components/HeaderCategory/HeaderCategory';
import Spinner from '../../assets/images/spinner.gif';
import styled from 'styled-components';
import Paginacion from 'react-js-pagination';
import { ReactComponent as FirstPage } from '../../assets/images/first-page.svg';
import { ReactComponent as LastPage } from '../../assets/images/last-page.svg';
import { ReactComponent as NextPage } from '../../assets/images/next-page.svg';
import { ReactComponent as PrevPage } from '../../assets/images/prev-page.svg';

const HeaderSpace = styled.div`
  height: 650px;
  text-align: center;
`;

const Category = ({ match }) => {
  const category = match.params.category;
  const notasContext = useContext(NotasContext);

  const {
    categoryNotes,
    getCategory,
    loading,
    count,
    getNextPageCat,
    currentPage,
  } = notasContext;

  useEffect(() => {
    getCategory(category);
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <HeaderSpace>
        <img src={Spinner} alt='' />
      </HeaderSpace>
    );
  } else {
    return (
      <Fragment>
        <h1 className='category_name'>{category}</h1>
        <HeaderCategory category={categoryNotes} />
        <div className='container' id='sec_category'>
          <div className='categoria'>
            <div className='notas_categoria'>
              {categoryNotes.map((filtered) => (
                <Card key={filtered.id} item={filtered} />
              ))}
            </div>
          </div>
          <Paginacion
            activePage={currentPage}
            totalItemsCount={count}
            itemsCountPerPage={6}
            pageRangeDisplayed={5}
            onChange={(pageNumber) => getNextPageCat(pageNumber, category)}
            firstPageText={<FirstPage />}
            lastPageText={<LastPage />}
            prevPageText={<PrevPage />}
            nextPageText={<NextPage />}
          />
        </div>
      </Fragment>
    );
  }
};

export default withRouter(Category);
