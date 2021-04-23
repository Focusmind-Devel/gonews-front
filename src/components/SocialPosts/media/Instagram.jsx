import React, { useEffect, useState, useContext } from 'react';
import NotasContext from '../../../context/notas/notasContext';
import styled from 'styled-components';
import './Media.sass';

const InstagramPosts = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
`;

const Instagram = () => {
	let [datosIG, setdatosIG] = useState({});
	let [posts, setPosts] = useState([]);

	const notasContext = useContext(NotasContext);

	const { 
		getInstagramData,
		ig_data,
	} = notasContext;

	useEffect(() => {
		getInstagramData()
	}, []);

	return (
		<React.Fragment>
			<InstagramPosts>
				{(!('list_posts' in ig_data) || ig_data.list_posts.length === 0) ? (
					<div style={{ textAlign: 'center', height: '300px', width: '100%' }}>
						<h2>Cargando</h2>
					</div>
				) : (
					ig_data.list_posts.slice(0, 3).map((post) => (
						<div className='instagram-post' key={post.id}>
							<a href={post.url_link} target='_blank' rel='noopener noreferrer'>
								<img src={post.display_url} alt='' />
								<div className='post-body'>
									<div className='profile-info'>
										<img className='profile' src={ig_data.profile_pic_url} alt='' />
										<div className='user-info'>
											<p className='fullName'>{ig_data.full_name}</p>
											<p>@{ig_data.username}</p>
										</div>
									</div>
									<div className='caption'>{post.accessibility_caption}</div>
								</div>
							</a>
						</div>
					))
				)}
			</InstagramPosts>
		</React.Fragment>
	);
};

export default Instagram;
