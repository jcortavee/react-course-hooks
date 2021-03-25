import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleTodoAdd }) => {
    
    const [{description}, handleInputChange, reset] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleTodoAdd(newTodo);
        reset();
    }

    return (
        <>
            <h4>Add todo</h4>
            <hr />
            
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    onChange={handleInputChange}
                    value={description}
                    name='description'
                    className='form-control'
                    placeholder='Aprender...'
                    autoComplete='off' />

                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1 btn-block'>
                        Agregar
                    </button>    
            </form>  
        </>
    )
}
