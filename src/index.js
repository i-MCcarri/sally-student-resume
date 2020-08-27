import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

ReactDOM.render(<App />, document.getElementById('root'));

/* Note: 
document.getElementById('root') achieves the same result as 
document.querySelector('#root'). It doesn't matter which one 
you use. The querySelector method works with any CSS selector 
and getElementById only works with ids.  */