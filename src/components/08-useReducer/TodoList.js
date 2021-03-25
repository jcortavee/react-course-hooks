import React from 'react';
import PropTypes from "prop-types";
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos = [], handleCheck, handleDelete }) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, index) => (
                    <TodoListItem key={todo.id} todo={todo} index={index} handleDelete={handleDelete} handleCheck={handleCheck} />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleDelete: PropTypes.func,
    handleCheck: PropTypes.func,
}
