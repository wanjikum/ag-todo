export default function toDoReducer(state=[], action){
    switch(action.type){
        case 'CREATE_TODO':
        console.log("I am in the reducer");
            return [...state, Object.assign({}, action.toDoItem)];
        default:
            return state;
    }

}