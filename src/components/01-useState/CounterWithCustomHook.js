import React from 'react'
import './CounterApp.css'

import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {state: counter, increment, decrement, reset } = useCounter(14);

    return (
        <>
            <h1>Counter with hook: { counter }</h1>
            <hr />

            <button className='btn' onClick={ () => increment(1) }>+1</button>
            <button className='btn' onClick={ () => decrement(1) }>-1</button>
            <button className='btn' onClick={ () => reset() }>Reset</button>
        </>
    )
}
