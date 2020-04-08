import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './containers';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { histData } from './reducers'

const composeEnhancers = compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = createStore(
  histData,
  composeEnhancers,
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
