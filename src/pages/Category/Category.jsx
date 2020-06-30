import React, { Fragment, useContext } from 'react';
import './Category.sass';
import NotasContext from '../../context/notas/notasContext';
import Card from '../../components/Card/Card';
import HeaderCategory from '../../components/HeaderCategory/HeaderCategory';

const Category = ({ match }) => {
  const category = match.params.category;

  console.log(match);

  const notasContext = useContext(NotasContext);

  const { notas } = notasContext;

  return (
    <Fragment>
      <h1 className='category_name'>{category}</h1>
      <HeaderCategory category={category} />
      <div className='container'>
        <div className='categoria'>
          <div className='notas_categoria'>
            {notas
              .filter((item) => item.category === category)
              .map((filtered) => (
                <Card key={filtered.id} item={filtered} />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Category;
