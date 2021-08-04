import React, { Fragment, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// components
import Header from '../../components/Header/Header';
import UltimasNoticias from '../../components/UltimasNoticias/UltimasNoticias';
import TresCategorias from '../../components/TresCategorias/TresCategorias';
import NuestrasRedes from '../../components/NuestrasRedes/NuestrasRedes';
import NotasContext from '../../context/notas/notasContext';

import ReactGA from 'react-ga';
import Spinner from '../../assets/images/spinner.gif';

import styled from 'styled-components';
// Styled Components
const HeaderSpace = styled.div`
	height: 650px;
	text-align: center;
`;

const PopupWrapper = styled.div`
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10;
	display: none;
`;

const PopupDiv = styled.div`
	margin: 10% auto;
	width: 100%;
	max-width: 800px;
	img {
		width: 100%;
		max-width: 800px;
		position: relative;
	}
	@media (max-width: 620px) {
		margin: 50% auto;
		display: flex;
		justify-content: center;
		img {
			max-width: 300px;
		}
	}
`;

const FooterBannerDiv = styled.div`
	text-align: center;
	margin-top: 4rem;
	@media (max-width: 620px) {
		margin-top: 0px;
		margin-bottom: 2rem;
	}
`;
const Home = () => {
	const notasContext = useContext(NotasContext);

	const { 
		getData, 
		getHomeItems,
		getAdsNote,
		ads_notes, 
		loading,
	} = notasContext;

	useEffect(() => {
		getData();
		getHomeItems();
		
		getAdsNote();

		const showPopUP = setTimeout(() => {
			popUpState();
		}, 5000);

		return () => {
			clearTimeout(showPopUP);
			// window.removeEventListener('scroll', scrolled);
		};
	}, []);

	// show pop up 5 seconds after loading
	const popUpState = () => {
		if (document.querySelector('#pop-up') === null) {
			return false;
		} else {
			document.querySelector('#pop-up').style.display = 'block';
		}
	};

	return (
		<Fragment>
			{ads_notes.popup_link === undefined || ads_notes.popup_link === null ? (
					false
				) : (
					<PopupWrapper
						id='pop-up'
						onClick={(e) =>
							e.target.style.display === 'block'
								? (e.target.style.display = 'none')
								: false
						}
					>
						<PopupDiv>
							<ReactGA.OutboundLink
								eventLabel='popUpNota'
								to={ads_notes.popup_link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={ads_notes.popup_image} alt='anuncio emergente' />
							</ReactGA.OutboundLink>
						</PopupDiv>
					</PopupWrapper>
				)}
			<Helmet>
				<meta name='description' content='Sitio de noticias, GoNews' />
				<title>GoNews</title>
			</Helmet>
			
			<Header />
			<UltimasNoticias />
			<div className='container'>
					<div
						className='leadboard'
						style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '1rem' }}
					>
						{loading ? (
							<HeaderSpace>
								<img src={Spinner} alt='' />
							</HeaderSpace>
						) : !ads_notes ? (
							false
						) : (
							<ReactGA.OutboundLink
								eventLabel='leadboardNota'
								to={ads_notes.leaderboard_link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									style={{ width: '100%', maxHeight: '250px' }}
									src={ads_notes.leaderboard_image}
									alt=''
								/>
							</ReactGA.OutboundLink>
						)}
					</div>
				</div>
			<TresCategorias />

			<NuestrasRedes />

			<div className='container'>
					<div style={{ textAlign: 'center' }}>
						{ads_notes.footbuttom_link === null ||
						ads_notes.footbuttom_link === undefined ? (
							false
						) : (
							<FooterBannerDiv c>
								<ReactGA.OutboundLink
									eventLabel='footerNota'
									to={ads_notes.footbuttom_link}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										style={{ width: '100%', maxHeight: '250px' }}
										src={ads_notes.footbuttom_image}
										alt='anuncio pie de pagina'
									/>
								</ReactGA.OutboundLink>
							</FooterBannerDiv>
						)}
					</div>
				</div>
			
		</Fragment>
	);
};

export default Home;
