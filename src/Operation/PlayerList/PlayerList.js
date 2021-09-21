import React from 'react';
import './PlayerList.css';

function PlayerList(props)
{

    return(
        <div>
            {props.users.length ? 
            props.users.map(user => <div>{user.name} {user.balance}</div>) :
            <div>Пользователей нет</div> }
        </div>
    );
}

export default PlayerList;