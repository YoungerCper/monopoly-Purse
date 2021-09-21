import React from 'react';
import './Button.css';

function Button(props)
{
    const clickListner = () =>{
        props.change(props.number)
    };

    return (
        <button className='nbbtn' onClick={clickListner}>{props.children}</button>
    );
}

export default Button;