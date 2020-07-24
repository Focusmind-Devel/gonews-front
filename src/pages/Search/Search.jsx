import React, { Fragment, useContext, useEffect } from 'react';
import NotasContext from '../../context/notas/notasContext';
import Paginacion from 'react-js-pagination';

// components
import Resultados from '../../components/Resultados/Resultados';
import BusquedaEstatica from '../../components/BusquedaEstatica/BusquedaEstatica';

// images
import { ReactComponent as FirstPage } from '../../assets/images/first-page.svg';
import { ReactComponent as LastPage } from '../../assets/images/last-page.svg';
import { ReactComponent as NextPage } from '../../assets/images/next-page.svg';
import { ReactComponent as PrevPage } from '../../assets/images/prev-page.svg';
import Spinner from '../../assets/images/spinner.gif';

// styles
import './Search.sass';
import styled from 'styled-components';

const NotFoundResult = styled.div`
	color: #e71d36;
	font-size: 21px;
	padding: 2rem 0 10rem 0;
`;

const EncabezadoStyle = styled.div`
	background-color: #02182b;
	color: #f2f2f2;
	padding: 4rem 0;
	@media (max-width: 620px) {
		background-color: #e0e0e0;
		color: #02182b;
		padding-top: 5rem;
	}
`;
const Search = ({ match }) => {
	const notasContext = useContext(NotasContext);

	const text = match.params.text;

	const {
		notas,
		count,
		getNextPage,
		currentPage,
		loading,
		searchNotes,
	} = notasContext;

	useEffect(() => {
		searchNotes(text);
		//eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<EncabezadoStyle className='search-header'>
				<div className='container'>
					<h3>Resultados de la búsqueda</h3>
					<BusquedaEstatica />
				</div>
			</EncabezadoStyle>
			{loading ? (
				<img src={Spinner} alt='loading' />
			) : count >= 1 ? (
				<div className='container'>
					<p className='total-resultados'>
						{count} resultados encontrados para{' '}
						<span style={{ textTransform: 'uppercase' }}>{text}</span>
					</p>
					<div className='resultados'>
						{notas
							.reverse()
							.filter(
								(item) =>
									item.title.toLowerCase().includes(text.toLowerCase()) ||
									item.tags.indexOf(text) ||
									item.content.toLowerCase().includes(text.toLowerCase())
							)
							.map((filtered) => (
								<Resultados key={filtered.id} item={filtered} />
							))}
					</div>
					<Paginacion
						activePage={currentPage}
						totalItemsCount={count}
						itemsCountPerPage={6}
						pageRangeDisplayed={5}
						onChange={(pageNumber) => getNextPage(pageNumber, text)}
						firstPageText={<FirstPage />}
						lastPageText={<LastPage />}
						prevPageText={<PrevPage />}
						nextPageText={<NextPage />}
					/>
				</div>
			) : (
				<NotFoundResult className='container'>
					<h4 style={{ width: '100%' }}>
						Lo sentimos, no encontramos resultados para la búsqueda de {text}
					</h4>
				</NotFoundResult>
			)}
		</Fragment>
	);
};

export default Search;
