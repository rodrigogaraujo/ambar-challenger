import { combineReducers } from 'redux';

import temperature from './temperature/reducer';

export default combineReducers({
  temperature,
});
