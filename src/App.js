import React, { Fragment, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollTopTop';
import ReactGA from 'react-ga';

// components and pages
import TopBar from './components/Topbar/Topbar';
import MainMenu from './components/MainMenu/MainMenu';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Category from './pages/Category/Category';
import Search from './pages/Search/Search';
import Nota from './pages/Nota/Nota';

// styles
import './MobileView.sass';
import './TabletView.sass';
import './LargeScreen.sass';
import 'animate.css';

function App() {
	// google analytics
	//ReactGA.initialize(`${process.e.REACT_APP_ID_ANALYTICS}`);
	ReactGA.initialize('UA-175557311-1');
	ReactGA.pageview(window.location.pathname + window.location.search);

	const [menuOpen, setMenuOpen] = useState(false);

	const isOpen = (openMenu) => {
		if (menuOpen) {
			setMenuOpen(false);
		} else {
			setMenuOpen(true);
		}
	};

	return (
		<Fragment>
			<ScrollToTop />
			<TopBar isOpen={isOpen} menuOpen={menuOpen} />
			<MainMenu menuOpen={menuOpen} isOpen={isOpen} />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/resultado/:text' component={Search} />
				<Route
					path='/nota/:nota'
					render={(props) => <Nota key={Date.now()} {...props} />}
				/>
				<Route
					path='/:category'
					render={(props) => <Category key={Date.now()} {...props} />}
				/>
			</Switch>
			<Footer />
		</Fragment>
	);
}

export default App;
