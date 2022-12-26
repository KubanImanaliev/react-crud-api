import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
        const {card} = props;



    return (

        <div className='container d-flex justify-content-between flex-wrap'>
            <Link to={`/cards-list/${card.id}`}>
            <h2>{card.name}</h2>
            <p>Цена товара: {card.price}</p>
            <p>Категория товара: {card.category}</p>
            <p>Описание товара: {card.description}</p>
            <img src={card.link} style={{ width: '18rem' }} alt="..."/> 
            </Link>
        </div>
    );
};

export default Cards;

