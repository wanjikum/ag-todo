import * as types from './actionTypes';

export function createToDo(toDoItem){
    return{
        type: 'types.CREATE_TODO',
        toDoItem
    }; 
}