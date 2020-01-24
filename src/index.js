import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers/index'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
