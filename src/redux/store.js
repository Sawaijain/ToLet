/* eslint-disable prettier/prettier */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { themeReducer, loginStatusReducer } from './reducer';

const rootReducer = combineReducers({ themeReducer, loginStatusReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));