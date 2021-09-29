import React, { useState } from 'react';
import ButtonSub from './Button/ButtonSub';
import Input from './InputSum/Input';
import './Operation.css';
import PlayerList from './PlayerList/PlayerList';

function Operation(props)
{

    const [choosen, setChoosen] = useState("");

    function changeChoosen(newWho)
    {
        setChoosen(newWho);
    }

    return(
        <div className='operation'>
            <div className='listPlace'>
                <PlayerList change={props.change} users={props.users} who={choosen} setWho={changeChoosen}></PlayerList>
            </div>
            <div className='place'>
                <div className='inputBox'><Input type='number'></Input></div>                
                <div className='buttonBox'><ButtonSub>Сделать перевод</ButtonSub></div>
            </div>
        </div>
    );
}

export default Operation;