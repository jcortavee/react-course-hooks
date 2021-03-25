import React, { useEffect, useReducer } from 'react'
import '../08-useReducer/styles.css'
import { todoReducer } from './TodoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo) => {
        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
    }

    const handleDelete = (id) => {
        
        const action = {
            type: 'remove',
            payload: {
                id: id
            }
        };

        dispatch(action);
    }

    const handleCheck = (id) => {
        const action = {
            type: 'complete',
            payload: {
                id: id
            }
        }

        dispatch(action);
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList handleCheck={handleCheck} handleDelete={handleDelete} todos={todos} />
                </div>
                <div className='col-5'>
                    <TodoAdd handleTodoAdd={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}
