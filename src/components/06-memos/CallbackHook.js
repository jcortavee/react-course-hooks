import React, { useCallback, useState } from 'react'
import '../01-useState/CounterApp.css'
import { ShowHijo } from './ShowHijo';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback(() => {
        setCounter(c => c + 1);
    }, [setCounter]);

    return (
        <div>
            <h1>useCallback Hooks: { counter }</h1>
            <hr />

            <ShowHijo increment={increment} />
        </div>
    )
}
