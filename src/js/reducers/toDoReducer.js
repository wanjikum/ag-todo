import * as types from './../actions/actionTypes';


export default function toDoReducer(state=[], action){
    switch(action.type){
        case 'types.CREATE_TODO':
            return [...state, Object.assign({}, action.toDoItem)];
        default:
            return state;
    }

}