import { applyMiddleware, createStore } from 'redux';
import weatherReducer from '../reducer/weather.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index.js';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const store=createStore(
    weatherReducer,
    applyMiddleware(sagaMiddleware,logger),);
sagaMiddleware.run(rootSaga);

export default store;