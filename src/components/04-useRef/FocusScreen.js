import React, { useRef } from 'react'
import '../01-useState/CounterApp.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                className='form-control'
                placeholder='Nombre' />

            <button class='btn btn-primary mt-5'
                onClick={handleClick}>Focus</button>
        </div>
    )
}
