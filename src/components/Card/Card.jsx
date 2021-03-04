import React from 'react';
import './Card.sass';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <Link to={`/nota/${item.slug}`} className='card'>
      <img src={(item.thumbnail)?item.thumbnail:item.headerImage} alt={item.category + ' - '+item.title} />
      <div className='card_body'>
        <span className='category'>{item.category}</span>
        <h3 className='title'>{item.title}</h3>
      </div>
    </Link>
  );
};

export default Card;
