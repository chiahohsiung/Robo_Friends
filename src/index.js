import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// without file extension implies it's a js file
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import "tachyons"

// since we use export, instead of export default, 
// we could have multiple exports 
// and we have to destructure it

// we could make a property like below greeting
ReactDOM.render(<App />
	,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
