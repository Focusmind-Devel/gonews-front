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
  };

  // set search text value
  const onChange = (e) => setText(e.target.value);

  // Search Note
  const onSubmit = (e) => {
    e.preventDefault();

    if (isActive === false) {
      toggleActive();
    } else {
      if (text === '') {
        alert('Por favor rellene el formulario de busqueda', 'light');
      } else {
        notasContext.searchNotes(text);
        history.push(`/resultado/${text}`);
        e.target.search.blur();
        setText('');
        toggleActive();
      }
    }
  };

  const tar = window.document.querySelector('#top');

  window.document.addEventListener('click', (e) => {
    if (e.target === tar) {
      toggleActive();
    }
  });

  return (
    <form
      id='busqueda'
      className={`form ${isActive ? 'active' : ''}`}
      onSubmit={onSubmit}
    >
      <input
        className={`form ${isActive ? 'active' : ''}`}
        id='search'
        type='search'
        placeholder={`${text ? text : 'Buscar'}`}
        value={text}
        onChange={onChange}
      />
      <button
        className={`search_btn ${isActive ? 'active' : ''}`}
        type='submit'
      >
        <img src={buscar} alt='icono buscar' />
      </button>
    </form>
  );
};

export default Busqueda;
