import React, { useEffect } from 'react';
import styled from 'styled-components';

const FacebookDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const Facebook = () => {
	useEffect(() => {
		window.FB.XFBML.parse();
	});

	if (window.innerWidth < 500) {
		return (
			<FacebookDiv>
				<div
					className='fb-page'
					data-href='https://www.facebook.com/Go-News-Ok-105143388120945/'
					data-tabs='timeline'
					data-width='300'
					data-height=''
					data-small-header='false'
					data-adapt-container-width='false'
					data-hide-cover='false'
					data-show-facepile='false'
				>
					<blockquote
						cite='https://www.facebook.com/Go-News-Ok-105143388120945/'
						className='fb-xfbml-parse-ignore'
					>
						<a href='https://www.facebook.com/Go-News-Ok-105143388120945/'>
							Go News Ok
						</a>
					</blockquote>
				</div>
			</FacebookDiv>
		);
	} else {
		return (
			<FacebookDiv>
				<div
					className='fb-page'
					data-href='https://www.facebook.com/Go-News-Ok-105143388120945/'
					data-tabs='timeline'
					data-width='500'
					data-height=''
					data-small-header='false'
					data-adapt-container-width='false'
					data-hide-cover='false'
					data-show-facepile='false'
				>
					<blockquote
						cite='https://www.facebook.com/Go-News-Ok-105143388120945/'
						className='fb-xfbml-parse-ignore'
					>
						<a href='https://www.facebook.com/Go-News-Ok-105143388120945/'>
							Go News Ok
						</a>
					</blockquote>
				</div>
			</FacebookDiv>
		);
	}
};

export default Facebook;
