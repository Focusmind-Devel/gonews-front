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

const NotaIndividual = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0;
  position: relative;
`;

const RenderNote = styled.div`
  width: 100%;
  max-width: 849px;
`;

const ShareButtons = styled.div`
  right: 5%;
  top: 20rem;
  display: flex;
  flex-direction: column;
`;

const Nota = ({ match }) => {
  const notasContext = useContext(NotasContext);

  const { getNote, nota, notas } = notasContext;

  useEffect(() => {
    getNote(match.params.notaID);
    //eslint-disable-next-line
  }, []);

  console.log(nota);

  return (
    <Fragment>
      <div className='container'>
        <NotaIndividual>
          <RenderNote>
            <div className='category-date'>
              <span>{nota.category}</span>
              <span>{nota.publisedAt}</span>
            </div>
            <div className='nota-content'>
              <h1>{nota.title}</h1>
              <p>{nota.content}</p>
              <img src={nota.headerImage} alt={nota.title} />
              <div dangerouslySetInnerHTML={{ __html: nota.body }} />
              <p>Escrito por {nota.author}</p>
              <hr />
              <div className='tags'>
                <span>En esta nota: </span>
                {nota.tags
                  ? nota.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))
                  : false}
              </div>
              <hr />
              <div className='relacionados'>
                <h2>Tambien Puede Interesarte:</h2>
                {notas
                  .filter((item) =>
                    item.tags.some((tag) => nota.tags.includes(tag))
                  )
                  .slice(0, 3)
                  .map((filtered) => (
                    <Resultados key={filtered.id} item={filtered} />
                  ))}
              </div>
            </div>
          </RenderNote>
          <ShareButtons>
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
        </NotaIndividual>
      </div>
    </Fragment>
  );
};

export default Nota;
