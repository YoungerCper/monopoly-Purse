import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar.js';
import Card from './Card/Card';

function App()
{

    return (
        <div className='main'>

            <NavigationBar></NavigationBar>

            <Card></Card>
        </div>
    );
}

export default App;