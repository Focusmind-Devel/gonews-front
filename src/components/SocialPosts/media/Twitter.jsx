import React, { useEffect } from 'react';
import styled from 'styled-components';

const TwitterDiv = styled.div`
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
`;

const Twitter = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://platform.twitter.com/widgets.js';
		document.getElementsByClassName('twitter-embed')[0].appendChild(script);
	}, []);

	return (
		<TwitterDiv>
			<section className='twitterContainer'>
				<div className='twitter-embed'>
					<a
						className='twitter-timeline'
						data-lang='es'
						data-height='500'
						data-theme='dark'
						href='https://twitter.com/gonews_ok'
					>
						Tweets por CNNEE
					</a>
				</div>
			</section>
		</TwitterDiv>
	);
};

export default Twitter;
