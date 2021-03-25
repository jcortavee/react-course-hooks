import React from 'react'
import PropTypes from "prop-types";

export const TodoListItem = ({ todo, index, handleCheck, handleDelete }) => {
    return (
        <li className='list-group-item' key={todo.id}>
            <p className={ `${todo.done && 'complete'}` } onClick={(e) => handleCheck(todo.id)}>{index + 1}. {todo.desc}</p>
            <button className='btn btn-danger' onClick={(e) => handleDelete(todo.id)}>
                Eliminar
            </button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    handleDelete: PropTypes.func,
    handleCheck: PropTypes.func,
}