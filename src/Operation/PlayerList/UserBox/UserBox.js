import React from "react";
import './UserBox.css'

function UserBox(props)
{

    function setUser()
    {
        props.change(props.user.name);
    }

    return (
        <div className="userBox" onClick={setUser}>
            <div className="nameBox">{props.user.name}</div>
            <div className="balanceBox">{props.user.balance + '$'}</div>
        </div>
    );
}

export default UserBox;