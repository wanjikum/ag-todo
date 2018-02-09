import {combineReducers} from 'redux';
import toDos from './toDoReducer.js';

const rootReducer = combineReducers({toDos});

export default rootReducer;