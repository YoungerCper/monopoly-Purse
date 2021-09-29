import React, { useState } from 'react';
import './Input.css';

function Input(props)
{

    function change(value)
    {
        props.change(value);
    }

    return(
        <div className='inBox'>
            <input type={props.type} className='inputSum' onChange={e => change(e.target.value)}/>
        </div>
    );
}

export default Input;