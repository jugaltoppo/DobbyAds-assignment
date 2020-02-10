import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./storereducer";

const userdetail = createStore(reducer);

ReactDOM.render(
  <Provider store={userdetail}>
  <App />
  </Provider>,
  document.getElementById('root')
);
