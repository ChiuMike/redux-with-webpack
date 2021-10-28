import { all } from 'redux-saga/effects';
import mySaga from '../action/weather.js';

function* rootSaga() {
    yield all([
        mySaga(),
    ]);
  }
  
  export default rootSaga;