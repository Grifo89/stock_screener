import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { root } from './reducers'
import { BrowserRouter } from 'react-router-dom'

const composeEnhancers = compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = createStore(
  root,
  composeEnhancers,
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
