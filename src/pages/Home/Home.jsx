import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import UltimasNoticias from '../../components/UltimasNoticias/UltimasNoticias';
import TresCategorias from '../../components/TresCategorias/TresCategorias';
import NuestrasRedes from '../../components/NuestrasRedes/NuestrasRedes';

const Home = () => {
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
