import React, { useState, useContext } from 'react';
import './NuestrasRedes.sass';
import NotasContext from '../../context/notas/notasContext';

import ReactGA from 'react-ga';

import styled from 'styled-components';

const NuestrasRedes = () => {
	const FooterBannerDiv = styled.div`
	text-align: center;
	margin-top: 4rem;
	@media (max-width: 620px) {
		margin-top: 0px;
		margin-bottom: 2rem;
	}
`;
	const notasContext = useContext(NotasContext);
	const {ads_notes} = notasContext;

		return (
			<div className='social_media'>
				<div className='container'>
					<div style={{ textAlign: 'center' }}>
						{ads_notes.prefooter_link === null ||
						ads_notes.prefooter_link === undefined ? (
							false
						) : (
							<FooterBannerDiv >
								<ReactGA.OutboundLink
									eventLabel='PrefooterNota'
									to={ads_notes.prefooter_link}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										style={{ width: '100%', maxHeight: '250px' }}
										src={ads_notes.prefooter_image}
										alt='anuncio en social area'
									/>
								</ReactGA.OutboundLink>
							</FooterBannerDiv>
						)}
					</div>
				</div>
			</div>
		);
};

export default NuestrasRedes;
