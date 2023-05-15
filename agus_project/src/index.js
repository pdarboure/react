import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Component from './components/first_component';
import Second from './components/second_component';
import Fetch from './components/fetch';
import Button from './components/button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    <Component title="Manola"/>
    <Component title="Veron"/>
    <Component title="Manola"/>
    <Fetch/>
    <Second/>
    <Button/>
    <Button text="botonsote"/>
    
    
  

    
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
