import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import mystore from './stores/mystore';



ReactDOM.render(
                <Provider store = {mystore}>
                <App />
                </Provider>
                ,
                document.getElementById('root')
                );
