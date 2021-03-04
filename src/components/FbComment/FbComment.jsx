import React from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
import './FbComments.sass';

const FbComment = ({ slug }) => {
	React.useEffect(() => {
		window.FB.XFBML.parse();
	},[]);
	return (
		<div className='ancho-comentatio'>
			<FacebookProvider wait appId='654549662159553'>
				<Comments href={`https://gonews.com.ar/nota/${slug}`} />
			</FacebookProvider>
		</div>
	);

	/*
		
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
	*/
};

export default FbComment;
