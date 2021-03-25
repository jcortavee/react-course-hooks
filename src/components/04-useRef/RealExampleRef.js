import React, { useState } from 'react'
import '../01-useState/CounterApp.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button className='btn btn-danger mt-5'
                onClick={() => setShow(!show)}>Show component</button>
        </div>
    )
}
