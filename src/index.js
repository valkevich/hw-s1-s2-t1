import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tap from './Tap';

const onShowConsole = () => {
  console.log('button1')
}

const onShowAlert = () => {
  alert('button2')
}

const onShowProp = (label) => {
  console.log(label);
}

ReactDOM.render(
  <React.StrictMode>
    <Tap label='button1' clickFunction={onShowConsole}/>
    <Tap label='button2' clickFunction={onShowAlert}/>
    <Tap label='button3' clickFunction={onShowProp}/>
  </React.StrictMode>,
  document.getElementById('root')
);

