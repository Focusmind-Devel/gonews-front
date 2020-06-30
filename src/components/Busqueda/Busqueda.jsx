import React, { useState } from 'react';
// icono
import buscar from '../../assets/images/busqueda.png';
// estilos
import './Busqueda.sass';

const Busqueda = ({ busquedaGrid }) => {
  const [searchInput, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const busqueda = document.querySelector('#busqueda');
    const search = document.querySelector('#search');

    if (e.target) {
      busqueda.style.width = '289px';
      busqueda.style.background = '#fff';
      busqueda.style.gridColumn = '10/13';
      search.style.width = '280px';
    }

    busquedaGrid(busqueda.style.gridColumn);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form id='busqueda'>
      <input
        type='search'
        name='search'
        id='search'
        onChange={handleChange}
        value={searchInput}
      />
      <button className='search_btn' onClick={handleSubmit}>
        <img src={buscar} alt=' busqueda' />
      </button>
    </form>
  );
};

export default Busqueda;
