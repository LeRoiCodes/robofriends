import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './Card';
// import {robots} from "./robots"
import "tachyons"
// import CardList from './CardList';
import App from './App';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, } from './redux/reducer';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';



const logger = createLogger()
// const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(searchRobots, applyMiddleware(thunk, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  </React.StrictMode>
);


