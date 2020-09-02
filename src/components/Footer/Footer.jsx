import React, { Fragment, useContext } from 'react';
import './Footer.sass';
import SocialLinks from '../SocialLinks/SocialLinks';
// import logo from '../../assets/images/Logo.png';
import { ReactComponent as MainLogo } from '../../assets/images/Logo.svg';
import arrowUp from '../../assets/images/arrowUp.png';
import mailIcon from '../../assets/images/mail.png';
import { Link } from 'react-router-dom';
import NotasContext from '../../context/notas/notasContext';

function Footer() {
	const notasContext = useContext(NotasContext);

	const { main, second } = notasContext;

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Fragment>
			<div id='footer_menu'>
				<div className='container'>
					<a href='/' className='logo'>
						<MainLogo alt='logo' />
					</a>
					{/* Menu Patte 1 */}
					<div className='bottom_menu'>
						<p className='menu_title'>Secciones</p>
						<ul className='bottom_menu_1'>
							{main.length >= 1
								? main.map((item, index) => (
										<li key={index} className='menu_item'>
											<Link className='click' to={`/${item.slug}`}>
												{item.name}
											</Link>
										</li>
								  ))
								: false}
						</ul>
					</div>
					{/* Menu parte 2 */}
					{second.length >= 1 ? (
						<div className='bottom_menu'>
							<p className='menu_title'>Mas +</p>
							<ul className='bottom_menu_1'>
								{second.map((item, index) => (
									<li
										key={index}
										className='menu_item animate__animated animate__fadeInRight animate__faster'
									>
										<Link className='click' to={`/${item.slug}`}>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					) : (
						false
					)}
					<SocialLinks />
					<a className='email' href='mailto:hola@gonews.com.ar'>
						<img src={mailIcon} alt='' />
						hola@<span>gonews</span>.com.ar
					</a>
					<img
						src={arrowUp}
						alt='back to top'
						className='back-to-top'
						onClick={scrollToTop}
					/>
				</div>
			</div>
			<footer>
				<div className='container'>
					<div className='copy'>
						<p>© Copyright Gonews. Todos los derechos reservados.</p>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								fontSize: '22px',
								fontFamily: 'Muli-Italic',
							}}
						>
							<span>Seguinos en:</span>
							<SocialLinks />
						</div>
					</div>
				</div>
			</footer>
		</Fragment>
	);
}

export default Footer;
