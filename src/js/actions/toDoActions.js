export function createToDo(toDoItem){
    console.log("I am in the action creater");
    return{
        type: 'CREATE_TODO',
        toDoItem
    }; 
}