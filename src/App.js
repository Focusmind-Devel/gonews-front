import React, { useEffect, useContext, Fragment, useState } from 'react';
import TopBar from './components/Topbar/Topbar';
import MainMenu from './components/MainMenu/MainMenu';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import NotasContext from './context/notas/notasContext';
// router
import { Route, Switch } from 'react-router-dom';
import Category from './pages/Category/Category';
import './MobileView.sass';
import './TabletView.sass';
import './LargeScreen.sass';

function App() {
  const notasContext = useContext(NotasContext);

  const { getData } = notasContext;

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, []);

  const isOpen = (openMenu) => {
    if (openMenu) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <Fragment>
      <TopBar isOpen={isOpen} menuOpen={menuOpen} />
      <MainMenu menuOpen={menuOpen} isOpen={isOpen} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:category' component={Category} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
