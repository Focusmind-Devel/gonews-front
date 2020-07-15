import React, { Fragment } from 'react';
import './Resultados.sass';
import { Link } from 'react-router-dom';
import flecha from '../../assets/images/flecha.png';
import styled from 'styled-components';

const Category = styled.span`
  background: #e71d36;
  color: #f2f2f2;
  margin-right: 20px;
  padding: 5px 10px;
  border-radius: 7px;
  text-transform: uppercase;
`;

const Image = styled.img`
  width: 223px;
  height: 165px;
  object-fit: cover;
`;

const Resultados = ({ item }) => {
  return (
    <Fragment>
      <Link to={`/nota/${item.id}`} className='results-card'>
        <div>
          <Image src={item.thumbnail} alt={item.title} />
        </div>
        <div className='card-body'>
          <div className='category-date'>
            <Category>{item.category}</Category>
            <span>{item.publisedAt}</span>
          </div>
          <div className='title-more'>
            <h3 style={{ textTransform: 'capitalize' }}>{item.title}</h3>
            <div to='/' className='leer_mas'>
              <img src={flecha} alt='icono flecha' />
              <span>Leer nota</span>
            </div>
          </div>
        </div>
      </Link>
      <hr />
    </Fragment>
  );
};

export default Resultados;