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
import Leaderboard from '../../assets/images/leaderboard.png';
import AnuncioPie from '../../assets/images/pie.png';
import Skycraper from '../../assets/images/skycraper.png';
import Popup from '../../assets/images/pop-up.png';

const HeaderSpace = styled.div`
  height: 650px;
  text-align: center;
`;

const PopupWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: none;
`;

const PopupDiv = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 10% auto;
  position: relative;
`;

const Category = ({ match }) => {
  const category = match.params.category;
  const notasContext = useContext(NotasContext);

  const {
    categoryNotes,
    getCategory,
    count,
    getNextPageCat,
    currentPage,
  } = notasContext;

  useEffect(() => {
    getCategory(category);

    //eslint-disable-next-line
  }, []);

  if (!categoryNotes) {
    return (
      <HeaderSpace>
        <img src={Spinner} alt='' />
      </HeaderSpace>
    );
  } else {
    return (
      <Fragment>
        <PopupWrapper
          ref={(e) =>
            e === null
              ? false
              : setTimeout(function () {
                  e.style.display = 'block';
                }, 5000)
          }
          onClick={(e) =>
            e.target.style.display === 'block'
              ? (e.target.style.display = 'none')
              : false
          }
        >
          <PopupDiv>
            <a href='/'>
              <img src={Popup} alt='anuncio emergente' />
            </a>
          </PopupDiv>
        </PopupWrapper>
        {categoryNotes.length >= 1 ? (
          <h1 className='category_name'>{categoryNotes[0].category}</h1>
        ) : (
          false
        )}
        <HeaderCategory category={category} />
        <div className='container' id='sec_category'>
          <div style={{ textAlign: 'center' }}>
            <a href='/'>
              <img
                style={{ width: '100%' }}
                src={Leaderboard}
                alt='anuncio 1'
              />
            </a>
          </div>

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
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <a href='/'>
              <img style={{ width: '100%' }} src={AnuncioPie} alt='anuncio 1' />
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default withRouter(Category);
