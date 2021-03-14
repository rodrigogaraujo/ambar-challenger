import { all } from 'redux-saga/effects';

import temperature from './temperature/sagas';

export default function* rootSaga() {
  yield all([temperature]);
}
