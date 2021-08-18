import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore,applyMiddleware,compose} from "redux"
import {reducers} from "./redux/reducers/index"
import thunk from "redux-thunk"
const store=createStore(reducers,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
