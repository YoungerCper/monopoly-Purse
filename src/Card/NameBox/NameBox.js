import React from 'react';
import './NameBox.css';

function NameBox(props)
{

    return(
        <div className='nameBox' {...props}>
            <p className="name">{props.children}</p>
        </div>
    );
}

export default NameBox;