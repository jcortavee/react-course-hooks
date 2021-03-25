export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];  
        case 'remove':
            return state.filter(s => s.id !== action.payload.id);
        case 'complete-old':
            return state.map(s => {
                if (s.id === action.payload.id) {
                    return {
                        ...s,
                        done: !s.done
                    }
                }

                return s;
            });
        case 'complete':
            return state.map( todo => (todo.id === action.payload.id) ? {...todo, done: !todo.done} : todo);    

        default:
            return state;
    }

}