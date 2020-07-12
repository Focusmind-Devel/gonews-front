import React, { useState, Fragment, useEffect } from 'react';
import Card from '../../Card/Card';
// icono
import flecha from '../../../assets/images/flecha.png';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function Politica({ notas }) {
  const [politica, setPolitica] = useState('');
  //eslint-disable-next-line
  let [oldSlide2, setOldSlide2] = useState(0);
  let [activeSlide2, setActiveSlide2] = useState(0);
  //eslint-disable-next-line
  let [activeSlide3, setActiveSlide3] = useState(0);

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
      setOldSlide2(current);
      setActiveSlide2(next);
    },
    afterChange: (current) => {
      setActiveSlide3(current);
    },
  };

  const getAttibuteValue = (e) => {
    const categoria = document.querySelectorAll('.categoria');

    for (let i = 0; i < categoria.length; i++) {
      if (categoria[i].dataset.value === 'Política') {
        setPolitica('Política');
      }
    }
  };

  return (
    <Fragment>
      <div className='categoria' ref={getAttibuteValue} data-value='Política'>
        <div className='titulo'>
          <img src={flecha} alt='icono flecha' />
          <Link to='/política'>{politica}</Link>
        </div>
        {screenSize >= 415 ? (
          <div className='notas_categoria'>
            {notas
              .filter((item) => item.category === politica)
              .slice(0, 3)
              .map((filtered) => (
                <Card key={filtered.id} item={filtered} />
              ))}
          </div>
        ) : (
          <Fragment>
            <Slider {...settings} className='carousel'>
              {notas
                .filter((item) => item.category === politica)
                .slice(0, 3)
                .map((filtered) => (
                  <Card key={filtered.id} item={filtered} />
                ))}
            </Slider>
            {activeSlide2 === 0 ||
            activeSlide2 === 1 ||
            activeSlide2 === 2 ||
            activeSlide2 === 3 ||
            activeSlide2 === 4 ||
            activeSlide2 === 5 ||
            activeSlide2 === 6 ? (
              <span className='numerador'>
                <span>{activeSlide2 + 1}</span> / 3
              </span>
            ) : (
              <span className='numerador'>{activeSlide2 - 1} / 3</span>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default Politica;
