import { combineReducers } from "redux";
import { driversReducer } from './driversReducer';

export const reducers = combineReducers({
    drivers: driversReducer
})