import React, { Fragment, useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import UltimasNoticias from '../../components/UltimasNoticias/UltimasNoticias';
import TresCategorias from '../../components/TresCategorias/TresCategorias';
import NuestrasRedes from '../../components/NuestrasRedes/NuestrasRedes';
import NotasContext from '../../context/notas/notasContext';

const Home = () => {
  const notasContext = useContext(NotasContext);

  const { getData, getHomeItems } = notasContext;

  useEffect(() => {
    getData();
    getHomeItems();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header />
      <UltimasNoticias />
      <TresCategorias />
      <NuestrasRedes />
    </Fragment>
  );
};

export default Home;
