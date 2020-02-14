import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
 

//Provider allows for us to pass down store as props throughout the application. in doing so, we can 
//also edit the state we get from the store. Because it is passed down through
// Providor, when we change the state, the app will rerender. It alerts my redux app when there
// has been a change in state, and this will rerender the React application. 