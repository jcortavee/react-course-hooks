const initialState = [{
    id: 1,
    todo: 'Buy a house',
    done: false
}];

const newTodo = {
    id: 2,
    todo: 'Call Mike',
    done: false
}

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'add') {
        return [...state, action.payload]
    }

    return state;
}
let todos = todoReducer();

const action = {
    type: 'add',
    payload: newTodo
}
todos = todoReducer(todos, action);

console.log(todos);