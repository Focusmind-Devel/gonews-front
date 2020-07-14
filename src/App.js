import React, { Fragment, useState } from 'react';
import TopBar from './components/Topbar/Topbar';
import MainMenu from './components/MainMenu/MainMenu';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
// router
import { Route, Switch } from 'react-router-dom';
import Category from './pages/Category/Category';
import './MobileView.sass';
import './TabletView.sass';
import './LargeScreen.sass';
import 'animate.css';
import Search from './pages/Search/Search';
import Nota from './pages/Nota/Nota';
import ScrollToTop from './components/ScrollToTop/ScrollTopTop';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isOpen = (openMenu) => {
    if (openMenu) {
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
        <Route path='/nota/:notaID' component={Nota} />
        <Route path='/:category' component={Category} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
