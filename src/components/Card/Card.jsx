import React from 'react';
import './Card.sass';

const Card = ({ item }) => {
  return (
    <div className='card'>
      <img src={item.thumbnail} alt='' />
      <div className='card_body'>
        <span className='category'>{item.category}</span>
        <h3 className='title'>{item.title}</h3>
      </div>
    </div>
  );
};

export default Card;
