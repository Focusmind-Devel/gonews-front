import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NotasContext from '../../context/notas/notasContext';
// icono
import buscar from '../../assets/images/busqueda.png';
// estilos
import './BusquedaEstatica.sass';

const BusquedaEstatica = ({ isOpen }) => {
  let history = useHistory();

  // context
  const notasContext = useContext(NotasContext);

  const [text, setText] = useState('');

  // set search text value
  const onChange = (e) => setText(e.target.value);

  console.log(text);

  // Search Note
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Por favor rellene el formulario de busqueda', 'light');
    } else {
      notasContext.searchNotes(text);
      history.push(`/resultado/${text}`);
      e.target.search.blur();
      setText(text);

      if (isOpen) {
        isOpen(false);
        e.target.parentElement.parentElement.parentElement.classList.remove(
          'animate__fadeInLeft'
        );
        e.target.parentElement.parentElement.parentElement.classList.add(
          'animate__fadeOutLeft'
        );
      } else {
        return false;
      }
    }
  };

  return (
    <div>
      <form id='busquedaEstatica' className='form' onSubmit={onSubmit}>
        <input
          id='search'
          type='search'
          placeholder='Buscar'
          onChange={onChange}
          value={text}
        />
        <button className='search_btn' type='submit'>
          <img src={buscar} alt='icono buscar' />
        </button>
      </form>
    </div>
  );
};

export default BusquedaEstatica;
