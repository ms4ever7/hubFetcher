import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import reducer from './redux/reducers';
import watcherSaga from './redux/sagas';

// create the middlewares
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware,
);

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  compose(middleware)
);

// run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root')
);

registerServiceWorker();
