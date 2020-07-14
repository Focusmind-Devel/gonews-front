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
  height: 650px;
`;

const HeaderSpace = styled.div`
  height: 650px;
  text-align: center;
`;

const Header = () => {
  const notasContext = useContext(NotasContext);

  const { notas } = notasContext;

  const notaDestacada = notas[notas.length - 1];

  if (notas <= 0) {
    return (
      <HeaderSpace>
        <img src={Spinner} alt='' />
      </HeaderSpace>
    );
  } else {
    return (
      <Fragment>
        <HeaderBg
          className='mobileHeader'
          style={{ backgroundImage: `url(${notaDestacada.headerImage})` }}
        >
          <div className='info-destacada'>
            <div className='container'>
              <span className='category'>{notaDestacada.category}</span>
              <Link to={`/nota/${notaDestacada.id}`} className='title'>
                {notaDestacada.title}
              </Link>
              <Link to={`/nota/${notaDestacada.id}`} className='leer_mas'>
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
