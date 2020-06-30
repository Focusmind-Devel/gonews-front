import React, { useContext } from 'react';
import './Header.sass';
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
  height: 650px;
`;

const Header = () => {
  const notasContext = useContext(NotasContext);

  const { notas } = notasContext;

  const notaDestacada = notas[notas.length - 1];

  if (notas <= 0) {
    return <p>Cargando</p>;
  } else {
    return (
      <HeaderBg
        className='mobileHeader'
        style={{ backgroundImage: `url(${notaDestacada.headerImage})` }}
      >
        <div className='info-destacada'>
          <span className='category'>{notaDestacada.category}</span>
          <Link to='/actualidad' className='title'>
            {notaDestacada.title}
          </Link>
          <Link to='/' className='leer_mas'>
            <img src={flecha} alt='icono flecha' />
            <span>Leer nota</span>
          </Link>
        </div>
      </HeaderBg>
    );
  }
};

export default Header;
