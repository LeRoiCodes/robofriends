import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './Card';
// import {robots} from "./robots"
import "tachyons"
// import CardList from './CardList';
import App from './App';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './redux/reducer';


const store = createStore(searchRobots)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  </React.StrictMode>
);


