import React from 'react';
import './NavigationBar.css';
import Button from './Button/Button';

function NavigationBar(props)
{

    return (
        <div className='NavigationBar'>
            <span className="title">Навигация</span>
            <Button change={props.change} number={0}>Моя карта</Button>
            <Button change={props.change} number={1}>Перевести</Button>
            <Button change={props.change} number={2}>История переводов</Button>
            <Button change={props.change} number={3}>Выйти</Button>
        </div>
    );
}

export default NavigationBar;