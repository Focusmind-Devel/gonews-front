import React, { useEffect } from 'react';
import './FbComments.sass';

const FbComment = ({ slug }) => {
	useEffect(() => {
		window.FB.XFBML.parse();
	});
	return (
		<div className='ancho-comentario'>
			<div
				className='fb-comments'
				data-href={`https://gonews.com.ar/nota/${slug}`}
				data-numposts='5'
				data-width='80%'
			></div>
		</div>
	);
};

export default FbComment;
