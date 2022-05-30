import { applyMiddleware, combineReducers, configureStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as greetingReducer } from './greeting/greetActions';

const reducer = combineReducers({
    greetingReducer,
});

// creating a store
const store = configureStore(reducer, applyMiddleware(logger, thunk));

export default store;