import { runSaga } from 'redux-saga';
import axios from 'axios';

import { initialFailure, initialSuccess } from './actions';
import { loadInitial } from './sagas';

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
