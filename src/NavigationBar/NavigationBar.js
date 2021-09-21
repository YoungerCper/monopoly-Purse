import React from 'react';
import './NavigationBar.css';
import Button from './Button/Button';

function NavigationBar()
{

    return (
        <div className='NavigationBar'>
            <span className="title">Навигация</span>
            <Button>Моя карта</Button>
            <Button>Перевести</Button>
            <Button>История переводов</Button>
            <Button>Выйти</Button>
        </div>
    );
}

export default NavigationBar;