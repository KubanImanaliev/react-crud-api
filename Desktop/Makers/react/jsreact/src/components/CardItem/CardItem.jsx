import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardItem = () => {

    const {id} = useParams();
    const [card, setCard] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/cards/${id}`).then((response) =>{
            setCard(response.data);
        })
    }, [id]);

    
    return (
        <div>
            101010101010
        </div>
    );
};

export default CardItem;