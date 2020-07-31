import React, { useContext, useEffect, useState, Fragment } from 'react';
import Card from '../Card/Card';
import './UltimasNoticias.sass';
import NotasContext from '../../context/notas/notasContext';
import Slider from 'react-slick';

const UltimasNoticias = () => {
	const notasContext = useContext(NotasContext);

	//eslint-disable-next-line
	let [oldSlide, setOldSlide] = useState(0);
	let [activeSlide, setActiveSlide] = useState(0);
	//eslint-disable-next-line
	let [activeSlide2, setActiveSlide2] = useState(0);

	const { latests } = notasContext;

	const [screenSize, setscreenSize] = useState(window.innerWidth);

	useEffect(() => {
		setscreenSize(window.innerWidth);
	}, []);

	var settings = {
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'center',
		centerPadding: '18px',
		centerMode: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 350,
				settings: {
					centerPadding: '5px',
				},
			},
		],
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
						{latests.map((item) => (
							<Card key={item.id} item={item} />
						))}
					</div>
				) : (
					<Fragment>
						<Slider {...settings} className='carousel'>
							{latests.map((item) => (
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
								<span>{activeSlide + 1}</span> / {latests.length}
							</span>
						) : (
							<span className='numerador'>
								{activeSlide - 1} / {latests.length}
							</span>
						)}
					</Fragment>
				)}
			</div>
		</section>
	);
};

export default UltimasNoticias;
