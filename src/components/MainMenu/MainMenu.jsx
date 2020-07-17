import React, { useState, useEffect, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MainMenu.sass';
import logoFixed from '../../assets/images/Logo-fixed.png';
import Busqueda from '../Busqueda/Busqueda';
import SocialLinks from '../SocialLinks/SocialLinks';

const MainMenu = ({ menuOpen, isOpen }) => {
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
            <li className='menu_item'>
              <Link to={'/actualidad'}>Actualidad</Link>
            </li>
            <li className='menu_item'>
              <Link to={'/economia'}>Economía</Link>
            </li>
            <li className='menu_item principal animate__animated animate__fadeInLeft animate__faster'>
              <Link to={'/politica'}>Política</Link>
            </li>
            <li className='menu_item principal animate__animated animate__fadeInLeft animate__faster'>
              <Link to={'/espectaculos'}>Espectáculos</Link>
            </li>
            <li className='menu_item principal animate__animated animate__fadeInLeft animate__faster'>
              <Link to={'/deportes'}>Deportes</Link>
            </li>
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
            <li className='menu_item adicional animate__animated animate__fadeInRight animate__faster'>
              <Link to={'/lifestyle'}>Lifestyle</Link>
            </li>
            <li className='menu_item adicional animate__animated animate__fadeInRight animate__faster'>
              <Link to={'/comidas'}>Comidas</Link>
            </li>
            <li className='menu_item adicional animate__animated animate__fadeInRight animate__faster'>
              <Link to={'/opinion'}>Opinión</Link>
            </li>
            <li className='menu_item adicional animate__animated animate__fadeInRight animate__faster'>
              <Link to={'/reportaje'}>Reportaje</Link>
            </li>
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
            <Busqueda isOpen={isOpen} />
            <ul id='main_menu'>
              <li className='menu_item'>
                <Link className='click' to={'/actualidad'}>
                  Actualidad
                </Link>
              </li>
              <li className='menu_item'>
                <Link className='click' to={'/economia'}>
                  Economía
                </Link>
              </li>
              <li className='menu_item'>
                <Link className='click' to={'/politica'}>
                  Política
                </Link>
              </li>
              <li className='menu_item'>
                <Link className='click' to={'/espectaculos'}>
                  Espectáculos
                </Link>
              </li>
              <li className='menu_item'>
                <Link className='click' to={'/deportes'}>
                  Deportes
                </Link>
              </li>
              <li className='menu_item principal' onClick={showMenu}>
                Mas +
              </li>
              <li className='menu_item adicional menos' onClick={showMenu}>
                Menos -
              </li>
              <li className='menu_item adicional animate__animated animate__fadeInDown animate__faster'>
                <Link className='click' to={'/lifestyle'}>
                  Lifestyle
                </Link>
              </li>
              <li className='menu_item adicional animate__animated animate__fadeInDown animate__faster'>
                <Link className='click' to={'/comidas'}>
                  Comidas
                </Link>
              </li>
              <li className='menu_item adicional animate__animated animate__fadeInDown animate__faster'>
                <Link className='click' to={'/opinion'}>
                  Opinión
                </Link>
              </li>
              <li className='menu_item adicional animate__animated animate__fadeInDown animate__faster'>
                <Link className='click' to={'/reportaje'}>
                  Reportaje
                </Link>
              </li>
            </ul>
            <SocialLinks />
          </div>
        </nav>
      ) : (
        <nav
          id='navigation2'
          onClick={hideOnClick}
          className='animate__animated animate__fadeOutLeft animate__faster'
        >
          <div id='menu' className='container'>
            <Busqueda />
            <ul id='main_menu'>
              <li className='menu_item'>
                <Link className='click' to={'/actualidad'}>
                  Actualidad
                </Link>
              </li>
              <li className='menu_item'>
                <Link className='click' to={'/economia'}>
                  Economía
                </Link>
              </li>
              <li className='menu_item'>
                <Link className='click' to={'/politica'}>
                  Política
                </Link>
              </li>
              <li className='menu_item'>
                <Link className='click' to={'/especticulos'}>
                  Espectáculos
                </Link>
              </li>
              <li className='menu_item'>
                <Link className='click' to={'/deportes'}>
                  Deportes
                </Link>
              </li>
              <li className='menu_item principal' onClick={showMenu}>
                Mas +
              </li>
              <li className='menu_item adicional menos' onClick={showMenu}>
                Menos -
              </li>
              <li className='menu_item adicional animate__animated animate__fadeInDown animate__faster'>
                <Link className='click' to={'/lifestyle'}>
                  Lifestyle
                </Link>
              </li>
              <li className='menu_item adicional animate__animated animate__fadeInDown animate__faster'>
                <Link className='click' to={'/comidas'}>
                  Comidas
                </Link>
              </li>
              <li className='menu_item adicional animate__animated animate__fadeInDown animate__faster'>
                <Link className='click' to={'/opinion'}>
                  Opinión
                </Link>
              </li>
              <li className='menu_item adicional animate__animated animate__fadeInDown animate__faster'>
                <Link className='click' to={'/reportaje'}>
                  Reportaje
                </Link>
              </li>
            </ul>
            <SocialLinks />
          </div>
        </nav>
      )}
    </Fragment>
  );
};

export default withRouter(MainMenu);
