import React, { useState, Fragment, useEffect } from 'react';
import Card from '../../Card/Card';
// icono
import flecha from '../../../assets/images/flecha.png';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function Actualidad({ notas }) {
  const [actualidad, setActualidad] = useState('');
  //eslint-disable-next-line
  let [oldSlide, setOldSlide] = useState(0);
  let [activeSlide, setActiveSlide] = useState(0);
  //eslint-disable-next-line
  let [activeSlide2, setActiveSlide2] = useState(0);

  const [screenSize, setscreenSize] = useState(window.innerWidth);

  useEffect(() => {
    setscreenSize(window.innerWidth);
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    arrows: false,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => {
      setActiveSlide2(current);
    },
  };

  const getAttibuteValue = (e) => {
    const categoria = document.querySelectorAll('.categoria');

    for (let i = 0; i < categoria.length; i++) {
      if (categoria[i].dataset.value === 'Actualidad') {
        setActualidad('Actualidad');
      }
    }
  };

  return (
    <Fragment>
      <div className='categoria' ref={getAttibuteValue} data-value='Actualidad'>
        <div className='titulo'>
          <img src={flecha} alt='icono flecha' />
          <Link to='/actualidad'>{actualidad}</Link>
        </div>
        {screenSize >= 415 ? (
          <div className='notas_categoria'>
            {notas
              .filter((item) => item.category === actualidad)
              .slice(0, 3)
              .map((filtered) => (
                <Card key={filtered.id} item={filtered} />
              ))}
          </div>
        ) : (
          <Fragment>
            <Slider {...settings} className='carousel'>
              {notas
                .filter((item) => item.category === actualidad)
                .slice(0, 3)
                .map((filtered) => (
                  <Card key={filtered.id} item={filtered} />
                ))}
            </Slider>
            {activeSlide === 0 ||
            activeSlide === 1 ||
            activeSlide === 2 ||
            activeSlide === 3 ||
            activeSlide === 4 ||
            activeSlide === 5 ||
            activeSlide === 6 ? (
              <span className='numerador'>
                <span>{activeSlide + 1}</span> / 3
              </span>
            ) : (
              <span className='numerador'>{activeSlide - 1} / 3</span>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default Actualidad;
