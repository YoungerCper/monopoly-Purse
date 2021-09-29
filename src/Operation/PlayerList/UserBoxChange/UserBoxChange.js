import React from "react";
import './UserBoxChange.css'

function UserBoxChange(props)
{

    return (
        <div className="userBoxChange">
            <div className="nameBoxChange">{props.user.name}</div>
            <div className="balanceBoxChange">{props.user.balance + '$'}</div>
        </div>
    );
}

export default UserBoxChange;