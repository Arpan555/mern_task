import { combineReducers } from 'redux';

import users from './users';
import authReducer from './auth';
export const reducers = combineReducers({ users,
authReducer });