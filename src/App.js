import React, { useEffect, useContext, Fragment } from 'react';
import TopBar from './components/Topbar/Topbar';
import MainMenu from './components/MainMenu/MainMenu';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import NotasContext from './context/notas/notasContext';
// router
import { Route, Switch } from 'react-router-dom';
import Category from './pages/Category/Category';
import './MobileView.sass';

function App() {
  const notasContext = useContext(NotasContext);

  const { getData } = notasContext;

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <TopBar />
      <MainMenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:category' component={Category} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
