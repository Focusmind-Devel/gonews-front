import React, { Fragment, useState, useEffect } from 'react';
import flecha from '../../assets/images/flecha.png';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Slider from 'react-slick';

const Cat = ({ item }) => {
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

  return (
    <Fragment>
      <div className='categoria'>
        <div className='titulo'>
          <img src={flecha} alt='icono flecha' />
          <Link to='/actualidad'>{item[0]}</Link>
        </div>
        {screenSize >= 415 ? (
          <div className='notas_categoria'>
            {item[1].map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <Fragment>
            <Slider {...settings} className='carousel'>
              {item[1].map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </Slider>
            {activeSlide === 0 ||
            activeSlide === 1 ||
            activeSlide === 2 ||
            activeSlide === 3 ? (
              <span className='numerador'>
                <span>{activeSlide + 1}</span> / {item[1].length}
              </span>
            ) : (
              <span className='numerador'>
                {activeSlide - 1} / {item[1].length}
              </span>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Cat;
