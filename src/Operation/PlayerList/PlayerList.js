import React from 'react';
import InputSum from '../InputSum/InputSum';
import './PlayerList.css';

function PlayerList(props)
{

    return(
        <div>
            <InputSum type='text'></InputSum>
            {props.users.length ? 
            props.users.map(user => <div>{user.name} {user.balance}</div>) :
            <div>Пользователей нет</div> }
        </div>
    );
}

export default PlayerList;