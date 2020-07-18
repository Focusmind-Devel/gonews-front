import React, { useContext, Fragment } from 'react';
import './Header.sass';
// icono
import flecha from '../../assets/images/flecha.png';
import Spinner from '../../assets/images/spinner.gif';
import NotasContext from '../../context/notas/notasContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBg = styled.div`
  padding: 1rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #02182b;
  background-position: center;
  height: 550px;
  @media (max-width: 620px) {
    &:after {
      content: '';
      height: 0.2rem;
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      botton: 38%;
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 455, 0.5) 100%
      );
    }
  }
`;

const HeaderSpace = styled.div`
  height: 650px;
  text-align: center;
`;

const Header = () => {
  const notasContext = useContext(NotasContext);

  const { mainHome } = notasContext;

  if (!mainHome) {
    return (
      <HeaderSpace>
        <img src={Spinner} alt='cargando' />
      </HeaderSpace>
    );
  } else {
    return (
      <Fragment>
        <HeaderBg
          className='mobileHeader'
          style={{ backgroundImage: `url(${mainHome.headerImage})` }}
        >
          <div className='info-destacada'>
            <div className='container'>
              <span className='category'>{mainHome.category}</span>
              <Link to={`/nota/${mainHome.slug}`} className='title'>
                {mainHome.title}
              </Link>
              <Link to={`/nota/${mainHome.slug}`} className='leer_mas'>
                <img src={flecha} alt='icono flecha' />
                <span>Leer nota</span>
              </Link>
            </div>
          </div>
        </HeaderBg>
      </Fragment>
    );
  }
};

export default Header;
