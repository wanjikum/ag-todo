import * as types from './actionTypes';

let nextToDoId = 0;
export const createToDo =  (toDoItem) => {
    toDoItem.id = nextToDoId++;
    return{
        type: types.CREATE_TODO,
        toDoItem
        
    }; 
}