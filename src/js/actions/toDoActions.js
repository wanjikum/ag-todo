export function createToDo(toDoItem){
    return{
        type: 'CREATE_TODO',
        toDoItem
    }; 
}