import React, { useContext, useEffect, useState, Fragment } from 'react';
import Card from '../Card/Card';
import './UltimasNoticias.sass';
import NotasContext from '../../context/notas/notasContext';
import Slider from 'react-slick';

const UltimasNoticias = () => {
  const notasContext = useContext(NotasContext);

  let [oldSlide, setOldSlide] = useState(0);
  let [activeSlide, setActiveSlide] = useState(0);
  let [activeSlide2, setActiveSlide2] = useState(0);

  const { notas } = notasContext;

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

  return (
    <section id='ultimas-notas'>
      <div className='container'>
        <h1>Últimas Noticias</h1>
        {screenSize >= 415 ? (
          <div className='ultimas_notas'>
            {notas.slice(0, 6).map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <Fragment>
            <Slider {...settings} className='carousel'>
              {notas.slice(0, 6).map((item) => (
                <Card key={item.id} item={item} />
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
                <span>{activeSlide + 1}</span> / 6
              </span>
            ) : (
              <span className='numerador'>{activeSlide - 1} / 6</span>
            )}
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default UltimasNoticias;
