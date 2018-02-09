export default function toDoReducer(state=[], action){
    switch(action.type){
        case 'CREATE_TODO':
            return [...state, Object.assign({}, action.toDoItem)];
        default:
            return state;
    }

}