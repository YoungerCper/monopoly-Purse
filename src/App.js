import React, {useState, useMemo} from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar.js';
import Card from './Card/Card';
import Operation from './Operation/Operation';
import User from './Classes/User';

function App()
{
    let searchWord = '';
    let users = [];

    //просто, добавляю пользователей(временно)
    //########################################

    users.push(new User('Andrew', 100));
    users.push(new User('Valera', 1200));
    users.push(new User('Denis', 10000));
    users.push(new User('Maxim', 10));

    //########################################

    const changeBlock = (numberBlock) => {
        setOpenBlock(numberBlock);
    };

    
    const chooseBlock = () => {
        if(openBlock === 0) return (<Card balance={balance}></Card>);
        if(openBlock === 1) return (<Operation setter={setBalance} balance={balance} users={searchedUsers} change={chargeSearchWord}></Operation>)
        else return (<div>Вибери другое</div>);
    };

    const chargeSearchWord = newWord =>{
        searchWord = newWord;
    };

    const [openBlock, setOpenBlock] = useState(0);
    const [balance, setBalance] = useState(1000);
    const searchedUsers = useMemo(
        ()=>{return users.filter(word => word.toString().toLowerCase().includes(searchWord.toString().toLowerCase()))},
        [users, searchWord]);    
    

    return (
        <div className='main'>
            <div className='box1'>
                <NavigationBar change={changeBlock}></NavigationBar>
            </div>
            <div className='box2'>
                {chooseBlock()}
            </div>
        </div>
    );
}

export default App;