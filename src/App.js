import React, {useState} from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar.js';
import Card from './Card/Card';

function App()
{

    const changeBlock = (numberBlock) => {
        setOpenBlock(numberBlock);
    };

    
    const chooseBlock = () => {
        if(openBlock === 0) return (<Card balance={balance}></Card>);
        else return (<div>Вибери другое</div>);
    };

    const [openBlock, setOpenBlock] = useState(0);
    const [balance, setBalance] = useState(1000);


    return (
        <div className='main'>

            <NavigationBar change={changeBlock}></NavigationBar>

            {chooseBlock()}

        </div>
    );
}

export default App;