import React, { useState, useEffect, Fragment, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MainMenu.sass';
import logoFixed from '../../assets/images/Logo-fixed.png';
import Busqueda from '../Busqueda/Busqueda';
import SocialLinks from '../SocialLinks/SocialLinks';
import NotasContext from '../../context/notas/notasContext';
import BusquedaEstatica from '../BusquedaEstatica/BusquedaEstatica';

const MainMenu = ({ menuOpen, isOpen }) => {
  const notasContext = useContext(NotasContext);

  const { main, second, getMenu } = notasContext;

  const [hideMenu, setHideMenu] = useState(true);

  const showMenu = () => {
    const principal = document.querySelectorAll('.principal');
    const adicional = document.querySelectorAll('.adicional');
    const i = document.querySelectorAll('#navigation .menu_item');

    if (hideMenu === true) {
      setHideMenu(false);
      if (second.length <= 1) {
        for (let item of principal) {
          item.style.display = 'none';
          i[4].style.display = 'none';
        }
      } else {
        for (let item of principal) {
          item.style.display = 'none';
          i[2].style.display = 'none';
          i[3].style.display = 'none';
          i[4].style.display = 'none';
        }
      }
      for (let item of adicional) {
        item.style.display = 'block';
      }
    } else {
      setHideMenu(true);
      if (second.length <= 1) {
        i[4].style.display = 'block';
      } else {
        i[2].style.display = 'block';
        i[3].style.display = 'block';
        i[4].style.display = 'block';
      }
      for (let item of principal) {
        item.classList.add =
          'animate__animated animate__backInLeft animate__faster';
        item.style.display = 'block';
      }
      for (let item of adicional) {
        item.style.display = 'none';
      }
    }
  };

  const [headerText, setHeaderText] = useState(false);

  useEffect(() => {
    getMenu();

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
        busqueda.style.display = 'flex';
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

  const hideOnClick = (e) => {
    if (e.target.classList.contains('click') || !isOpen) {
      const element =
        e.target.parentElement.parentElement.parentElement.parentElement;

      // element.style.opacity = '0';

      // element.style.display = 'none';

      element.classList.remove('animate__fadeInLeft');
      element.classList.add('animate__fadeOutLeft');

      isOpen(true);
    }
  };

  return (
    <Fragment>
      <nav id='navigation'>
        <div id='menu' className='container'>
          <div id='logo'>
            <Link to='/'>
              <img
                className='animate__animated animate__fadeInLeft animate__faster'
                src={logoFixed}
                alt='go news logo'
              />
            </Link>
          </div>
          <ul id='main_menu'>
            {main.length >= 1
              ? main.map((item, index) => (
                  <li key={index} className='menu_item'>
                    <Link className='click' to={`/${item.slug}`}>
                      {item.name}
                    </Link>
                  </li>
                ))
              : false}
            {second.length >= 1 ? (
              <Fragment>
                <li
                  className='menu_item principal animate__animated animate__fadeInLeft animate__faster'
                  onClick={showMenu}
                >
                  Mas +
                </li>
                <li
                  className='menu_item adicional animate__animated animate__fadeInRight animate__faster menos'
                  onClick={showMenu}
                >
                  Menos -
                </li>
                {second.map((item, index) => (
                  <li
                    key={index}
                    className='menu_item adicional animate__animated animate__fadeInRight animate__faster'
                  >
                    <a className='click' href={`/${item.slug}`}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </Fragment>
            ) : (
              false
            )}
          </ul>
          <Busqueda />
        </div>
      </nav>
      {menuOpen ? (
        <nav
          id='navigation2'
          onClick={hideOnClick}
          className='animate__animated animate__fadeInLeft animate__faster'
        >
          <div id='menu' className='container'>
            <BusquedaEstatica isOpen={isOpen} />
            <ul id='main_menu'>
              {main.length >= 1
                ? main.map((item, index) => (
                    <li key={index} className='menu_item'>
                      <Link className='click' to={`/${item.slug}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))
                : false}
              {second.length >= 1 ? (
                <Fragment>
                  <li className='menu_item principal' onClick={showMenu}>
                    Mas +
                  </li>
                  <li className='menu_item adicional menos' onClick={showMenu}>
                    Menos -
                  </li>
                  {second.map((item, index) => (
                    <li
                      key={index}
                      className='menu_item adicional animate__animated animate__fadeInDown animate__faster'
                    >
                      <Link className='click' to={`/${item.slug}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </Fragment>
              ) : (
                false
              )}
            </ul>
            <SocialLinks />
          </div>
        </nav>
      ) : (
        <nav
          id='navigation2'
          className='animate__animated animate__fadeOutLeft animate__faster'
        ></nav>
      )}
    </Fragment>
  );
};

export default withRouter(MainMenu);
