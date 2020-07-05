import React, { useState } from 'react';
// icono
import buscar from '../../assets/images/busqueda.png';
// estilos
import './Busqueda.sass';

const Busqueda = ({ busquedaGrid }) => {
  const [searchInput, setSearch] = useState('');
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <div id='busqueda' className={`form ${isActive ? 'active' : ''}`}>
      <form>
        <input
          className={`form ${isActive ? 'active' : ''}`}
          id='search'
          type='search'
          placeholder='Buscar'
        />
      </form>
      <button
        className={`search_btn ${isActive ? 'active' : ''}`}
        onClick={toggleActive}
      >
        <img src={buscar} alt='icono buscar' />
      </button>
    </div>
  );
};

export default Busqueda;
