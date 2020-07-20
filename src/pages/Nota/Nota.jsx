import React, { useEffect, useContext, Fragment } from 'react';
import NotasContext from '../../context/notas/notasContext';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// share buttons
import { ReactComponent as ShareFacebook } from '../../assets/images/share-facebook.svg';
import { ReactComponent as ShareTwitter } from '../../assets/images/share-twitter.svg';
import { ReactComponent as ShareMail } from '../../assets/images/share-mail.svg';
import { ReactComponent as ShareLink } from '../../assets/images/share-link.svg';
import { ReactComponent as ShareComment } from '../../assets/images/share-comment.svg';
import Spinner from '../../assets/images/spinner.gif';
import Quote from '../../assets/images/quote.png';
// styles
import './Notas.sass';
import FbComment from '../../components/FbComment/FbComment';

const NotaIndividual = styled.div`
  margin: 4rem 0;
  position: relative;
  color: #02182b;
  overflow: hidden;
`;

const RenderNote = styled.div`
  width: 100%;
`;

const ShareButtons = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 10%;
  z-index: 10;
  @media (max-width: 620px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1rem;
    position: static;
    z-index: 1;
  }
`;

const ImgAndShare = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
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

  const { getNote, nota, loading, show_signed, enable_comments } = notasContext;

  let history = useHistory();

  let postUrl = encodeURI(document.location.href);

  const content = () => {
    if (window.document.querySelector('cite')) {
      const cita = document.querySelector('cite');

      cita.innerHTML += `
          <img style='width: 70px; height: 60px; margin-right: 1rem' src=${Quote} alt='frase' />
        `;

      cita.style.display = 'flex';
      cita.style.flexDirection = 'row-reverse';
      cita.style.alignItems = 'center';
      cita.style.margin = '4rem 0';

      if (window.innerWidth < 620) {
        cita.style.display = 'flex';
        cita.style.flexDirection = 'column-reverse';
        cita.style.alignItems = 'start';
        cita.style.margin = '4rem 0';
        cita.style.fontSize = '25px';
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    getNote(match.params.nota);
    //eslint-disable-next-line
  }, []);

  const shareBtn = () => {
    if (navigator.share) {
      navigator
        .share({
          title: nota.title,
          text: nota.content,
          url: postUrl,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Web Share API is not supported in your browser.');
    }
  };

  if (loading) {
    return (
      <HeaderSpace>
        <img src={Spinner} alt='' />
      </HeaderSpace>
    );
  } else {
    return (
      <Fragment>
        <Helmet>
          <meta name='description' content={nota.content} />
          <title>{nota.title} | GoNews</title>
        </Helmet>
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
                    style={{
                      width: '100%',
                      maxWidth: '1000px',
                      margin: '2rem 0',
                    }}
                    src={nota.thumbnail}
                    alt={nota.title}
                  />
                  <ShareButtons id='share'>
                    <i>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ShareFacebook />
                      </a>
                    </i>
                    <i>
                      <a
                        href={`https://twitter.com/share?url=${postUrl}&text=${nota.title}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ShareTwitter />
                      </a>
                    </i>
                    <i>
                      <a
                        href={`mailto:?subject=${nota.title}&body=Esto%20te%20puede%20interesar%20 ${postUrl}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ShareMail />
                      </a>
                    </i>
                    <i style={{ cursor: 'pointer' }} onClick={shareBtn}>
                      <ShareLink />
                    </i>
                    <i>
                      <a
                        href={`sms:?body=${postUrl}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ShareComment />
                      </a>
                    </i>
                  </ShareButtons>
                </ImgAndShare>
                <div
                  ref={content}
                  style={{ width: '100%', maxWidth: '1000px' }}
                  dangerouslySetInnerHTML={{ __html: nota.body }}
                />
                {show_signed ? (
                  <p>
                    Escrito por <span className='author'>{nota.author}</span>{' '}
                  </p>
                ) : (
                  false
                )}
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
                          <span
                            style={{ cursor: 'pointer' }}
                            onClick={() => history.push(`/resultado/${tag}`)}
                            className='tag'
                            key={index}
                          >
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
                <div className='relacionados'>
                  {enable_comments ? (
                    <Fragment>
                      <h2>Comentarios:</h2>
                      <FbComment slug={nota.slug} />
                    </Fragment>
                  ) : (
                    false
                  )}
                </div>
              </div>
            </RenderNote>
          </NotaIndividual>
        </div>
      </Fragment>
    );
  }
};

export default Nota;
