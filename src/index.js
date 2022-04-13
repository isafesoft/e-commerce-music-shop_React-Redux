import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducer from '../src/reducers'

const newStore = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={newStore}>
    <App />
  </Provider>,

);


