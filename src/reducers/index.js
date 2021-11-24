import { combineReducers } from 'redux';
import todoreducers from './todoreducers';

const rootreducer = combineReducers({
  todoreducers,
});

export default rootreducer;
