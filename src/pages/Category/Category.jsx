import React, { Fragment, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Paginacion from 'react-js-pagination';
import ReactGA from 'react-ga';

// components
import NotasContext from '../../context/notas/notasContext';
import Card from '../../components/Card/Card';
import HeaderCategory from '../../components/HeaderCategory/HeaderCategory';

// images
import Spinner from '../../assets/images/spinner.gif';
import { ReactComponent as FirstPage } from '../../assets/images/first-page.svg';
import { ReactComponent as LastPage } from '../../assets/images/last-page.svg';
import { ReactComponent as NextPage } from '../../assets/images/next-page.svg';
import { ReactComponent as PrevPage } from '../../assets/images/prev-page.svg';

// styles
import './Category.sass';
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

const Category = ({ match }) => {
	const category = match.params.category;
	const notasContext = useContext(NotasContext);

	const {
		categoryNotes,
		getCategory,
		count,
		getNextPageCat,
		currentPage,
		getAdsByCategory,
		ads_category,
		loading,
	} = notasContext;

	useEffect(() => {
		getAdsByCategory(category);
		getCategory(category);

		const showPopUP = setTimeout(() => {
			popUpState();
		}, 5000);
		return () => clearTimeout(showPopUP);
		//eslint-disable-next-line
	}, []);

	const popUpState = () => {
		if (document.querySelector('#pop-up') === null) {
			return false;
		} else {
			document.querySelector('#pop-up').style.display = 'block';
		}
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
				{ads_category.popup_link === undefined ||
				ads_category.popup_link === null ? (
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
								eventLabel='popUpCategory'
								to={ads_category.popup_link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={ads_category.popup_image} alt='anuncio emergente' />
							</ReactGA.OutboundLink>
						</PopupDiv>
					</PopupWrapper>
				)}

				{categoryNotes.length >= 1 ? (
					<Fragment>
						<Helmet>
							<meta name='description' content='Categoria de GoNews' />
							<title>{`${categoryNotes[0].category} | GoNews`}</title>
						</Helmet>
						<h1 className='category_name'>{categoryNotes[0].category}</h1>
					</Fragment>
				) : (
					false
				)}
				<HeaderCategory category={category} />
				<div className='container' id='sec_category'>
					{ads_category.popup_image === undefined ||
					ads_category.popup_image === null ? (
						false
					) : (
						<div style={{ textAlign: 'center' }}>
							{ads_category ? (
								<ReactGA.OutboundLink
									eventLabel='leadboardCategory'
									to={ads_category.leaderboard_link}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										style={{ width: '100%', height: '150px' }}
										src={ads_category.leaderboard_image}
										alt=''
									/>
								</ReactGA.OutboundLink>
							) : (
								false
							)}
						</div>
					)}

					<div style={{ display: 'flex' }}>
						<div className='categoria' style={{ width: '100%' }}>
							<div className='notas_categoria'>
								{categoryNotes.map((filtered) => (
									<Card key={filtered.id} item={filtered} />
								))}
							</div>
						</div>
						{ads_category.skyscraper_link === null ||
						ads_category.skyscraper_link === undefined ? (
							false
						) : (
							<div
								className='skycrapper'
								style={{ position: 'absolute', right: 0, margin: '0 1%' }}
							>
								<ReactGA.OutboundLink
									eventLabel='skyscraperCategory'
									to={ads_category.skyscraper_link}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										style={{
											width: '100%',
											maxWidth: '160px',
											height: '600px',
										}}
										src={ads_category.skyscraper_image}
										alt='anuncio barra lateral'
									/>
								</ReactGA.OutboundLink>
							</div>
						)}
					</div>
					<Paginacion
						activePage={currentPage}
						totalItemsCount={count}
						itemsCountPerPage={6}
						pageRangeDisplayed={5}
						onChange={(pageNumber) => getNextPageCat(pageNumber, category)}
						firstPageText={<FirstPage />}
						lastPageText={<LastPage />}
						prevPageText={<PrevPage />}
						nextPageText={<NextPage />}
					/>
					{ads_category.footbuttom_link === null ||
					ads_category.footbuttom_link === undefined ? (
						false
					) : (
						<div style={{ textAlign: 'center', marginTop: '4rem' }}>
							<ReactGA.OutboundLink
								eventLabel='footerCategory'
								to={ads_category.footbuttom_link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									style={{ width: '100%', height: '150px' }}
									src={ads_category.footbuttom_image}
									alt='anuncio pie de pagina'
								/>
							</ReactGA.OutboundLink>
						</div>
					)}
				</div>
			</Fragment>
		);
	}
};

export default withRouter(Category);
