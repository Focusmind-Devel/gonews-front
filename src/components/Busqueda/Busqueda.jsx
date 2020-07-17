import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NotasContext from '../../context/notas/notasContext';
// icono
import buscar from '../../assets/images/busqueda.png';
// estilos
import './Busqueda.sass';

const Busqueda = ({ isOpen }) => {
  let history = useHistory();

  // context
  const notasContext = useContext(NotasContext);

  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);

  // toggle search field
  const toggleActive = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  // set search text value
  const onChange = (e) => setText(e.target.value);

  // Search Note
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Por favor rellene el formulario de busqueda', 'light');
    } else {
      notasContext.searchNotes(text);
      history.push(`/resultado/${text}`);
      e.target.search.blur();
      if (isOpen) {
        isOpen(isActive ? false : true);
      } else {
        return false;
      }
    }
  };

  return (
    <div id='busqueda' className={`form ${isActive ? 'active' : ''}`}>
      <form onSubmit={onSubmit}>
        <input
          className={`form ${isActive ? 'active' : ''}`}
          id='search'
          type='search'
          placeholder={`${text ? text : 'Buscar'}`}
          value={text}
          onChange={onChange}
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
