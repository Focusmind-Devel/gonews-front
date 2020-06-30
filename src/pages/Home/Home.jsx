import React from 'react';
import Header from '../../components/Header/Header';
import UltimasNoticias from '../../components/UltimasNoticias/UltimasNoticias';
import TresCategorias from '../../components/TresCategorias/TresCategorias';
import NuestrasRedes from '../../components/NuestrasRedes/NuestrasRedes';

const Home = () => {
  return (
    <div>
      <Header />
      <UltimasNoticias />
      <TresCategorias />
      <NuestrasRedes />
    </div>
  );
};

export default Home;
