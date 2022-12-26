import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const CardList = () => {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/cards').then((response) => {
        setCards(response.data);
    })
    }, []);

    

    return (
        <div>
            {cards.map((card) =>(
                <Cards key={card.id} card={card} />
            ))}
        </div>
    );
};

export default CardList;