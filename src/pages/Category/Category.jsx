import React, { Fragment, useContext, useEffect } from 'react';
import './Category.sass';
import NotasContext from '../../context/notas/notasContext';
import Card from '../../components/Card/Card';
import HeaderCategory from '../../components/HeaderCategory/HeaderCategory';

const Category = ({ match }) => {
  const category = match.params.category;

  const notasContext = useContext(NotasContext);

  const { notas, getCategory, loading } = notasContext;

  useEffect(() => {
    getCategory(1);
    //eslint-disable-next-line
  }, []);

  console.log(notas);

  if (loading) {
    return <h1>Cargando</h1>;
  } else {
    return (
      <Fragment>
        <h1 className='category_name'>{category}</h1>
        <HeaderCategory category={category} />
        <div className='container' id='sec_category'>
          <div className='categoria'>
            <div className='notas_categoria'>
              {notas.map((filtered) => (
                <Card key={filtered.id} item={filtered} />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default Category;
