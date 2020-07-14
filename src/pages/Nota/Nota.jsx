import React, { useEffect, useContext, Fragment } from 'react';
import NotasContext from '../../context/notas/notasContext';
import styled from 'styled-components';
import Resultados from '../../components/Resultados/Resultados';
// share buttons
import facebookShare from '../../assets/images/facebook-share.png';
import twitterShare from '../../assets/images/twitter-share.png';
import mailShare from '../../assets/images/mail-share.png';
import linkShare from '../../assets/images/link-share.png';
import commentShare from '../../assets/images/comment-share.png';
import Spinner from '../../assets/images/spinner.gif';
// styles
import Notas from './Notas.sass';

const NotaIndividual = styled.div`
  margin: 4rem 0;
  position: relative;
  color: #02182b;
`;

const RenderNote = styled.div`
  width: 100%;
`;

const ShareButtons = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 620px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1rem;
  }
`;

const ImgAndShare = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const HeaderSpace = styled.div`
  height: 650px;
  text-align: center;
`;

const Nota = ({ match }) => {
  const notasContext = useContext(NotasContext);

  const { getNote, nota, notas, loading } = notasContext;

  let lastScrollY = 0;

  useEffect(() => {
    getNote(match.params.notaID);

    const share = document.getElementById('stick');
    console.log(share);

    /*
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageXOffset > stickTo) {
        console.log('hola');
      } else {
        console.log('adios');
      }
    });

    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };*/
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
        <div className='container'>
          <NotaIndividual>
            <RenderNote>
              <div className='category-date'>
                <span className='category'>{nota.category}</span>
                <span className='date'>{nota.publisedAt}</span>
              </div>
              <div className='nota-content'>
                <h1 className='title'>{nota.title}</h1>
                <p style={{ width: '100%', maxWidth: '1000px' }}>
                  {nota.content}
                </p>
                <ImgAndShare>
                  <img
                    style={{ width: '100%', maxWidth: '1000px' }}
                    src={nota.headerImage}
                    alt={nota.title}
                  />
                  <ShareButtons id='share'>
                    <i>
                      <a href='/'>
                        <img src={facebookShare} alt='Share to facebook' />
                      </a>
                    </i>
                    <i>
                      <a href='/'>
                        <img src={twitterShare} alt='Share to twitter' />
                      </a>
                    </i>
                    <i>
                      <a href='/'>
                        <img src={mailShare} alt='Share via mail' />
                      </a>
                    </i>
                    <i>
                      <a href='/'>
                        <img src={linkShare} alt='Share link' />
                      </a>
                    </i>
                    <i>
                      <a href='/'>
                        <img src={commentShare} alt='Share comment' />
                      </a>
                    </i>
                  </ShareButtons>
                </ImgAndShare>
                <div
                  style={{ width: '100%', maxWidth: '1000px' }}
                  dangerouslySetInnerHTML={{ __html: nota.body }}
                />
                <p>
                  Escrito por <span className='author'>{nota.author}</span>{' '}
                </p>
                <hr />
                <div className='tags'>
                  <span
                    style={{
                      marginRight: '1rem',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                    }}
                  >
                    En esta nota:{' '}
                  </span>
                  <div className='every-tag'>
                    {nota.tags
                      ? nota.tags.map((tag, index) => (
                          <span className='tag' key={index}>
                            {tag}
                          </span>
                        ))
                      : false}
                  </div>
                </div>
                <hr />
                <div className='relacionados'>
                  <h2>Tambien Puede Interesarte:</h2>
                </div>
                <hr />
              </div>
            </RenderNote>
          </NotaIndividual>
        </div>
      </Fragment>
    );
  }
};

export default Nota;
