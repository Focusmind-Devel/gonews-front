import React, { Fragment, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
  margin: 10% auto;
  width: 100%;
  max-width: 500px;
  img {
    width: 100%;
    max-width: 500px;
    position: relative;
  }
  @media (max-width: 620px) {
    margin: 50% auto;
    display: flex;
    justify-content: center;
    img {
      max-width: 300px;
    }
  }
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
          <Fragment>
            <Helmet>
              <meta name='description' content='Categoria de GoNews' />
              <title>{categoryNotes[0].category} | GoNews</title>
            </Helmet>
            <h1 className='category_name'>{categoryNotes[0].category}</h1>
          </Fragment>
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

          <div style={{ display: 'flex' }}>
            <div className='categoria' style={{ width: '100%' }}>
              <div className='notas_categoria'>
                {categoryNotes.map((filtered) => (
                  <Card key={filtered.id} item={filtered} />
                ))}
              </div>
            </div>
            <div style={{ position: 'absolute', right: 0, margin: '0 1%' }}>
              <a href='/'>
                <img style={{ width: '100%' }} src={Skycraper} alt='anuncio' />
              </a>
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
