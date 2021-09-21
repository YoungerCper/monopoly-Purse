import React from 'react';
import './BalanceBox.css';

function BalanceBox(props)
{

    return(
        <div className='balanceBox'>
            <p className='balance'>{props.children}</p>
        </div>
    );
}

export default BalanceBox;