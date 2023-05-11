import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './componets/AppForme1';
//import AppForme2 from './componets/AppForme2';
//import AppContext from './componets/AppContext';
// import AppHOC from './componets/AppHOC';
import AppRouter from './componets/AppRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

