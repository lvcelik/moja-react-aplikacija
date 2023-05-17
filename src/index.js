import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './componets/AppForme1';
//import AppForme2 from './componets/AppForme2';
//import AppContext from './componets/AppContext';
// import AppHOC from './componets/AppHOC';
// import AppRouter from './componets/AppRouter';
// import AppRedux from './componets/AppRedux';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { reducer } from './componets/utilities/ReduxFunkcije';
import AppReduxThunk from './componets/AppReduxThunk';
import { reducer } from './componets/utilities/ReduxThunkFunkcije';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer, applyMiddleware(thunk));

root.render(
    <Provider store={store}> 
        <AppReduxThunk />
    </Provider>
)

// root.render(
//     <Provider store={store}>
//         <AppRedux />
//     </Provider>
// )
// root.render(<AppRouter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

