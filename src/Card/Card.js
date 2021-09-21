import React from 'react';
import BalanceBox from './BalanceBox/BalanceBox';
import './Card.css';
import NameBox from './NameBox/NameBox';

function Card()
{

    return (
        <div className="cardPlace">

            <BalanceBox>1000$</BalanceBox>

            <NameBox>Москаленко Андрей</NameBox>

        </div>
    );
}

export default Card;