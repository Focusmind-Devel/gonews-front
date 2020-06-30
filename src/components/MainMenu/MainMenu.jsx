import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.sass';
import logoFixed from '../../assets/images/Logo-fixed.png';
import Busqueda from '../Busqueda/Busqueda';

const MainMenu = () => {
  const [hideMenu, setHideMenu] = useState(true);

  const showMenu = () => {
    const principal = document.querySelectorAll('.principal');
    const adicional = document.querySelectorAll('.adicional');

    if (hideMenu === true) {
      setHideMenu(false);
      for (let item of principal) {
        item.style.display = 'none';
      }
      for (let item of adicional) {
        item.style.display = 'block';
      }
    } else {
      setHideMenu(true);
      for (let item of principal) {
        item.style.display = 'block';
      }
      for (let item of adicional) {
        item.style.display = 'none';
      }
    }
  };

  const busquedaGrid = (grid) => {
    const mainMenu = document.getElementById('main_menu');

    if (grid === '10 / 13') {
      mainMenu.style.gridColumn = '2/10';
    } else {
      mainMenu.style.gridColumn = '2/12';
    }
  };

  const [headerText, setHeaderText] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('navigation');
    const menu = document.getElementById('menu');
    const mainMenu = document.getElementById('main_menu');
    const logo = document.querySelector('#menu #logo');
    const busqueda = document.querySelector('#menu #busqueda');
    const sticky = nav.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        nav.classList.add('sticky');
        menu.classList.remove('container');
        mainMenu.style.gridColumn = '2/12';
        logo.style.display = 'block';
        busqueda.style.display = 'block';
        if (headerText !== true) {
          setHeaderText(true);
        }
      } else {
        nav.classList.remove('sticky');
        menu.classList.add('container');
        mainMenu.style.gridColumn = '1/13';
        logo.style.display = 'none';
        busqueda.style.display = 'none';
        if (headerText !== true) {
          setHeaderText(false);
        }
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <nav id='navigation'>
      <div id='menu' className='container'>
        <div id='logo'>
          <a href='/'>
            <img src={logoFixed} alt='go news logo' />
          </a>
        </div>
        <ul id='main_menu'>
          <li className='menu_item'>
            <Link to={'/actualidad'}>Actualidad</Link>
          </li>
          <li className='menu_item'>
            <Link to={'/economia'}>Economia</Link>
          </li>
          <li className='menu_item principal'>
            <Link to={'/politica'}>Politica</Link>
          </li>
          <li className='menu_item principal'>
            <Link to={'/espectaculos'}>Espectaculos</Link>
          </li>
          <li className='menu_item principal'>
            <Link to={'/deportes'}>Deportes</Link>
          </li>
          <li className='menu_item principal' onClick={showMenu}>
            Mas +
          </li>
          <li className='menu_item adicional menos' onClick={showMenu}>
            Menos +
          </li>
          <li className='menu_item adicional'>
            <Link to={'/lifestyle'}>Lifestyle</Link>
          </li>
          <li className='menu_item adicional'>
            <Link to={'/comidas'}>Comidas</Link>
          </li>
          <li className='menu_item adicional'>
            <Link to={'/opinion'}>Opinion</Link>
          </li>
          <li className='menu_item adicional'>
            <Link to={'/reportaje'}>Reportaje</Link>
          </li>
        </ul>
        <Busqueda busquedaGrid={busquedaGrid} />
      </div>
    </nav>
  );
};

export default MainMenu;
