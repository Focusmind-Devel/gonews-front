import React, { useEffect, useState } from 'react';
import instagram from 'user-instagram-profile';
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

	useEffect(() => {
		instagram('https://www.instagram.com/gonews_ok')
			.then((data) => {
				setdatosIG(data);
				setPosts(data.posts);
			})
			.catch((e) => {
				// Error will trigger if the account link provided is false.
				console.error(e);
			});
	}, []);

	return (
		<React.Fragment>
			<InstagramPosts>
				{posts.length === 0 ? (
					<div style={{ textAlign: 'center', height: '300px', width: '100%' }}>
						<h2>Cargando</h2>
					</div>
				) : (
					posts.slice(0, 3).map((post) => (
						<div className='instagram-post' key={post.id}>
							<a href={post.link} target='_blank' rel='noopener noreferrer'>
								<img src={post.picture.thumbnail_320} alt='' />
								<div className='post-body'>
									<div className='profile-info'>
										<img className='profile' src={datosIG.avatar} alt='' />
										<div className='user-info'>
											<p className='fullName'>{datosIG.fullName}</p>
											<p>@{datosIG.username}</p>
										</div>
									</div>
									<div className='caption'>{post.captionText}</div>
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
