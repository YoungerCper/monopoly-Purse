import React from 'react';
import './ButtonSub.css';

function ButtonSub(props)
{

    return(
        <div>
            <button className='submitBtn'>{props.children}</button>
        </div>
    );
}

export default ButtonSub;