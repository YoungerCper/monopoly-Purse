import React from 'react';
import ButtonSub from './Button/ButtonSub';
import InputSum from './InputSum/InputSum';
import './Operation.css';
import PlayerList from './PlayerList/PlayerList';

function Operation(props)
{

    return(
        <div className='operation'>
            <div className='listPlace'>
                <PlayerList change={props.change} users={props.users}></PlayerList>
            </div>
            <div className='place'>
                <div className='inputBox'><InputSum type='number'></InputSum></div>                
                <div className='buttonBox'><ButtonSub>Сделать перевод</ButtonSub></div>
            </div>
        </div>
    );
}

export default Operation;