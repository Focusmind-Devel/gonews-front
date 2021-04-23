import React, { useState, useContext } from 'react';
import './NuestrasRedes.sass';
import NotasContext from '../../context/notas/notasContext';

import ReactGA from 'react-ga';

import styled from 'styled-components';

const NuestrasRedes = () => {

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
							<div style={{ textAlign: 'center', margin: '1rem', marginBottom: '4em'  }}>
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
							</div>
						)}
					</div>
				</div>
			</div>
		);
};

export default NuestrasRedes;
