import React from 'react';
import './InputSum.css';

function InputSum(props)
{

    return(
        <div className='inBox'>
            <input type={props.type} className='inputSum'/>
        </div>
    );
}

export default InputSum;