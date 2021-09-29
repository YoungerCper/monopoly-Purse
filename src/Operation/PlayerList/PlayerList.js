import React from 'react';
import Input from '../InputSum/Input';
import './PlayerList.css';
import UserBox from './UserBox/UserBox';
import UserBoxChange from './UserBoxChange/UserBoxChange';

function PlayerList(props)
{

    function whichStyle(user)
    {
        if(user.name == props.who)
            return (<UserBoxChange user={user}></UserBoxChange>);
        else
            return (<UserBox user={user} change={props.setWho}></UserBox>);
    }

    return(
        <div className="list">
            <div className="searchBox">
                <Input type='text' change={props.change}></Input>
            </div>
            <div className="userSpace">
                {props.users.length ? 
                props.users.map(user => whichStyle(user)) :
                <div>Пользователей нет</div> }
            </div>
        </div>
    );
}

export default PlayerList;