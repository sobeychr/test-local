import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers(reducer),
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(saga);

export default store;
