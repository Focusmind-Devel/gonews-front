import React from 'react';
import './Resultados.sass';
import { Link } from 'react-router-dom';
import flecha from '../../assets/images/flecha.png';

const Resultados = ({ item }) => {
  return (
    <div className='search-card'>
      <img src={item.thumbnail} alt={item.title} />
      <div className='card-body'>
        <div className='category-date'>
          <span className='category'>{item.category}</span>
          <span>19/06/20</span>
          <span>15:34 PM</span>
        </div>
        <div className='title-more'>
          <h3>{item.title}</h3>
          <Link to='/' className='leer_mas'>
            <img src={flecha} alt='icono flecha' />
            <span>Leer nota</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resultados;
