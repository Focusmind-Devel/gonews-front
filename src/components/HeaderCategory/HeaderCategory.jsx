import React, { useContext } from 'react';
import '../Header/Header.sass';
// icono
import flecha from '../../assets/images/flecha.png';
import NotasContext from '../../context/notas/notasContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBg = styled.div`
  padding: 1rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #02182b;
  background-position: center;
  height: 470px;
`;

const HeaderCategory = ({ category }) => {
  const notasContext = useContext(NotasContext);

  const { main, second } = notasContext;

  const result = main.filter((item) => item.slug === category);
  const result2 = second.filter((item) => item.slug === category);

  if (result.length >= 1) {
    return (
      <HeaderBg
        className='mobileHeaderCategory'
        style={{ backgroundImage: `url(${result[0].destacada.headerImage})` }}
      >
        <div className='info-destacada'>
          <div className='container'>
            <span className='category'>{result[0].destacada.category}</span>
            <Link to={`/nota/${result[0].destacada.slug}`} className='title'>
              {result[0].destacada.title}
            </Link>
            <Link to={`/nota/${result[0].destacada.slug}`} className='leer_mas'>
              <img src={flecha} alt='icono flecha' />
              <span>Leer nota</span>
            </Link>
          </div>
        </div>
      </HeaderBg>
    );
  } else if (result2.length >= 1) {
    return (
      <HeaderBg
        className='mobileHeaderCategory'
        style={{
          backgroundImage: `url(${result2[0].destacada.headerImage})`,
        }}
      >
        <div className='info-destacada'>
          <div className='container'>
            <span className='category'>{result2[0].destacada.category}</span>
            <Link to={`/nota/${result2[0].destacada.slug}`} className='title'>
              {result2[0].destacada.title}
            </Link>
            <Link
              to={`/nota/${result2[0].destacada.slug}`}
              className='leer_mas'
            >
              <img src={flecha} alt='icono flecha' />
              <span>Leer nota</span>
            </Link>
          </div>
        </div>
      </HeaderBg>
    );
  } else {
    return false;
  }
};

export default HeaderCategory;
