import React, { useEffect, useContext, Fragment, useRef } from 'react';
import NotasContext from '../../context/notas/notasContext';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

// components
import FbComment from '../../components/FbComment/FbComment';
import Resultados from '../../components/Resultados/Resultados';

// images
import { ReactComponent as ShareFacebook } from '../../assets/images/share-facebook.svg';
import { ReactComponent as ShareTwitter } from '../../assets/images/share-twitter.svg';
import { ReactComponent as ShareMail } from '../../assets/images/share-mail.svg';
import { ReactComponent as ShareLink } from '../../assets/images/share-link.svg';
import { ReactComponent as ShareComment } from '../../assets/images/share-comment.svg';
import Spinner from '../../assets/images/spinner.gif';

// styles
import './Notas.sass';
import styled from 'styled-components';
// import { useState } from 'react';

// Styled components
const NotaIndividual = styled.div`
	margin: 4rem 0;
	position: relative;
	color: #02182b;
	display: flex;
	@media (min-width: 1190px) and (max-width: 1635px) {
		width: 80%;
	}
	@media (min-width: 1635px) and (max-width: 1900px) {
		width: 90%;
	}
`;

const RenderNote = styled.div`
	width: 100%;
`;

const ShareButtons = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5%;
	padding-left: 4em;
	padding-right: 2em;
	
	@media (max-width: 1350px) {
		padding-left: 1em;
	}
	
	@media (max-width: 1190px) {
		padding:0;
		flex-direction: row;
		justify-content: space-around;
		margin: 0;
		position: static;
		z-index: 1;
		margin: 0;
	}
	
	@media (max-width: 1444px) {
		margin-top: 5%;
	}
`;

const ImgAndShare = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	width: 100%;
	@media (max-width: 1190px) {
		flex-direction: column;
	}
`;

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
	z-index: 15;
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

const Nota = ({ match }) => {
	const notasContext = useContext(NotasContext);

	const {
		getNote,
		nota,
		loading,
		show_signed,
		enable_comments,
		related_notes,
		getAdsNote,
		ads_notes,
	} = notasContext;

	let history = useHistory();

	let postUrl = encodeURI(document.location.href);

	const myRef = useRef();

	/*
	const handleScroll = () => {
		if (myRef.current) {
			if (
				window.pageYOffset >= 600 &&
				window.innerWidth >= 1190 &&
				window.innerWidth <= 1444
			) {
				myRef.current.style.position = 'fixed';
				myRef.current.style.top = '5%';
				myRef.current.style.left = '72%';
			} else if (
				window.pageYOffset >= 600 &&
				window.innerWidth >= 1445 &&
				window.innerWidth <= 1900
			) {
				myRef.current.style.position = 'fixed';
				myRef.current.style.top = '2%';
				myRef.current.style.left = '76.5%';
			} else if (window.pageYOffset >= 600 && window.innerWidth >= 1901) {
				myRef.current.style.position = 'fixed';
				myRef.current.style.top = '0';
				myRef.current.style.left = '76.2%';
			} else {
				myRef.current.style.position = 'static';
			}
		} else {
			return false;
		}
	};
	*/

	useEffect(() => {
		// const scrolled = window.addEventListener('scroll', handleScroll);
		getNote(match.params.nota);
		getAdsNote();

		const showPopUP = setTimeout(() => {
			popUpState();
		}, 5000);

		return () => {
			clearTimeout(showPopUP);
			// window.removeEventListener('scroll', scrolled);
		};

		//eslint-disable-next-line
	}, [myRef]);

	// show pop up 5 seconds after loading
	const popUpState = () => {
		if (document.querySelector('#pop-up') === null) {
			return false;
		} else {
			document.querySelector('#pop-up').style.display = 'block';
		}
	};

	// share the note on click in android phones
	const shareBtn = () => {
		const text = window.location.href;

		window.navigator.clipboard.writeText(text);
		alert('Url Copiada');
	};

	if (loading) {
		return (
			<HeaderSpace>
				<img src={Spinner} alt='' />
			</HeaderSpace>
		);
	} else {
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
				{nota === undefined ? (
					false
				) : (
					// para meta tags de la pagina
					<Helmet>
						<meta name='description' content={nota.content} />
						<title>{`${nota.title} | GoNews`}</title>

						{/* <!-- Twitter Meta Tags --> */}
						<meta name='twitter:card' content='summary_large_image' />
						<meta name='twitter:title' content={nota.title} />
						<meta name='twitter:description' content={nota.content} />
						<meta name='twitter:image' content={nota.headerImage} />
						
						<meta property="og:type" content="article" />
						<meta property="og:title" content={nota.title}/>
						<meta property="og:description" content={nota.content} />
						<meta property="og:image" content={nota.headerImage} />
					</Helmet>
				)}
				<div className='container'>
					<div
						className='leadboard-adaptable'
						style={{ textAlign: 'center', marginTop: '2rem' }}
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
				<div style={{ display: 'flex' }}>
					<div className='container'>
						<NotaIndividual>
							<RenderNote>
								<div className='category-date'>
									<span className='category'>{nota.category}</span>
									<span className='date'>{nota.publisedAt}</span>
								</div>
								<div className='nota-content'>
									<h1 className='title'>{nota.title}</h1>
									<p style={{ width: '100%', maxWidth: '1000px' }}>
										{nota.content}
									</p>
									<ImgAndShare>
										<img
											style={{
												display: 'block',
												width: '100%',
												maxWidth: '1000px',
												margin: '2rem 0',
											}}
											src={nota.headerImage}
											alt={nota.title}
										/>
										<ShareButtons id='share' ref={myRef}>
											<i>
												<a
													href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
													target='_blank'
													rel='noopener noreferrer'
												>
													<ShareFacebook />
												</a>
											</i>
											<i>
												<a
													href={`http://twitter.com/share?text=${nota.title}&url=${postUrl}`}
													target='_blank'
													rel='noopener noreferrer'
												>
													<ShareTwitter />
												</a>
											</i>
											<i>
												<a
													href={`mailto:?subject=${nota.title}&body=Esto%20te%20puede%20interesar%20 ${postUrl}`}
													target='_blank'
													rel='noopener noreferrer'
												>
													<ShareMail />
												</a>
											</i>
											<i style={{ cursor: 'pointer' }} onClick={shareBtn}>
												<ShareLink />
											</i>
											<i
												style={{ cursor: 'pointer' }}
												onClick={() =>
													document
														.getElementById('comentarios')
														.scrollIntoView()
												}
											>
												<ShareComment />
											</i>
										</ShareButtons>
									</ImgAndShare>
									<div
										style={{ width: '100%', maxWidth: '1000px' }}
										dangerouslySetInnerHTML={{ __html: nota.body }}
									/>
									{show_signed ? (
										<p>
											Escrito por <span className='author'>{nota.author}</span>{' '}
										</p>
									) : (
										false
									)}
									<hr />
									<div className='tags'>
										<span
											style={{
												marginRight: '1rem',
												fontWeight: 'bold',
												textTransform: 'uppercase',
											}}
										>
											En esta nota:{' '}
										</span>
										<div className='every-tag'>
											{nota.tags
												? nota.tags.map((tag, index) => (
														<span
															style={{ cursor: 'pointer' }}
															onClick={() => history.push(`/resultado/${tag}`)}
															className='tag'
															key={index}
														>
															{tag}
														</span>
												  ))
												: false}
										</div>
									</div>
									<hr />
									{related_notes.length >= 1 ? (
										<div className='relacionados'>
											<h2>Tambien Puede Interesarte:</h2>
											{related_notes.map((filtered) => (
												<Resultados key={filtered.id} item={filtered} />
											))}
										</div>
									) : (
										false
									)}
									<hr />
									<div className='relacionados' id='comentarios'>
										{enable_comments ? (
											<Fragment>
												<h2>Comentarios:</h2>
												<FbComment slug={nota.slug} />
											</Fragment>
										) : (
											false
										)}
									</div>
								</div>
							</RenderNote>
						</NotaIndividual>
					</div>
					<div
						className='skycrapper'
						style={{
							position: 'absolute',
							right: 0,
							margin: '0 5%',
							marginTop: '40%',
							width: '100%',
							maxWidth: '160px',
						}}
					>
						{ads_notes.skyscraper_link === null ||
						ads_notes.skyscraper_link === undefined ? (
							false
						) : (
							<div
								style={{
									position: 'absolute',
									right: 0,
									margin: '0 1%',
								}}
							>
								<ReactGA.OutboundLink
									eventLabel='skyscraperNota'
									to={ads_notes.skyscraper_link}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										style={{
											width: '100%',
											maxWidth: '160px',
											height: '600px',
										}}
										src={ads_notes.skyscraper_image}
										alt='anuncio barra lateral'
									/>
								</ReactGA.OutboundLink>
							</div>
						)}
					</div>
				</div>
				<div className='container'>
					<div style={{ textAlign: 'center' }}>
						{ads_notes.footbuttom_link === null ||
						ads_notes.footbuttom_link === undefined ? (
							false
						) : (
							<FooterBannerDiv >
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
	}
};

export default Nota;
