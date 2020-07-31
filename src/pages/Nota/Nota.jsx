import React, { useEffect, useContext, Fragment } from 'react';
import NotasContext from '../../context/notas/notasContext';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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

// Styled components
const NotaIndividual = styled.div`
	margin: 4rem 0;
	position: relative;
	color: #02182b;
	display: flex;
	@media (min-width: 1190px) and (max-width: 1444px) {
		width: 80%;
	}
`;

const RenderNote = styled.div`
	width: 100%;
`;

const ShareButtons = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5%;
	margin-right: 4%;
	z-index: 10;
	@media (max-width: 1190px) {
		flex-direction: row;
		justify-content: space-around;
		margin: 0;
		position: static;
		z-index: 1;
		margin: 0;
	}
	@media (max-width: 1444px) {
		margin-top: 5%;
		margin-left: 8.5%;
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
	max-width: 500px;
	img {
		width: 100%;
		max-width: 500px;
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

	useEffect(() => {
		const scrolled = window.addEventListener('scroll', handleScroll);

		getNote(match.params.nota);
		getAdsNote();

		const showPopUP = setTimeout(() => {
			popUpState();
		}, 5000);

		return () => {
			clearTimeout(showPopUP);
			window.removeEventListener('scroll', scrolled);
		};

		//eslint-disable-next-line
	}, []);

	const handleScroll = () => {
		const share = document.getElementById('share');
		if (window.pageYOffset >= 600) {
			share.style.position = 'fixed';
			share.style.top = '5%';
			share.style.right = '12.5%';
		} else {
			share.style.position = 'static';
		}
	};

	// show pop up 5 seconds after loading
	const popUpState = () => {
		if (document.querySelector('#pop-up') === null) {
			console.log('adios');
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
							<a
								href={ads_notes.popup_link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={ads_notes.popup_image} alt='anuncio emergente' />
							</a>
						</PopupDiv>
					</PopupWrapper>
				)}
				{nota === undefined ? (
					false
				) : (
					<Helmet>
						<meta name='description' content={nota.content} />
						<title>{`${nota.title} | GoNews`}</title>
					</Helmet>
				)}
				<div className='container'>
					<div
						className='leadboard'
						style={{ textAlign: 'center', marginTop: '2rem' }}
					>
						{ads_notes ? (
							<a
								href={ads_notes.leaderboard_link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									style={{ width: '60%' }}
									src={ads_notes.leaderboard_image}
									alt='anuncio top'
								/>
							</a>
						) : (
							false
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
												width: '100%',
												maxWidth: '1000px',
												margin: '2rem 0',
											}}
											src={nota.headerImage}
											alt={nota.title}
										/>
										<ShareButtons id='share'>
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
													href={`https://twitter.com/share?url=${postUrl}&text=${nota.title}`}
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
								<a
									href={ads_notes.skyscraper_link}
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
								</a>
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
							<div style={{ textAlign: 'center', marginTop: '4rem' }}>
								<a
									href={ads_notes.footbuttom_link}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										style={{ width: '100%', height: '150px' }}
										src={ads_notes.footbuttom_image}
										alt='anuncio pie de pagina'
									/>
								</a>
							</div>
						)}
					</div>
				</div>
			</Fragment>
		);
	}
};

export default Nota;
