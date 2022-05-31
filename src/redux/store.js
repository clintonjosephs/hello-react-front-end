import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greeting/greetActions';

const reducer = combineReducers({
  greetingReducer,
});

// creating a store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
