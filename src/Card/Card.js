import React from 'react';
import BalanceBox from './BalanceBox/BalanceBox';
import './Card.css';
import NameBox from './NameBox/NameBox';

function Card(props)
{

    return (
        <div className="cardPlace">

            <BalanceBox>{props.balance + '$'}</BalanceBox>

            <NameBox>Москаленко Андрей</NameBox>

        </div>
    );
}

export default Card;