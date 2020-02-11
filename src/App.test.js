import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import reducers from "./reducers/index";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
          <Provider store={store}>
            <App/>
          </Provider>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
