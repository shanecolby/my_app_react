import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function BasicTest() {
  return (
    < div >
      <h1>This is react</h1>
      <h4>It is cool because</h4>
      <ul>
        <li>It is interesting</li>
        <li>It is html and js combined</li>
        <li>It is popular</li>
      </ul>
      <h3>Stay tuned for more react</h3>
    </div >
  )
}

ReactDOM.render(
  <BasicTest />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
