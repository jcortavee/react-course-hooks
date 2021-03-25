import React, {useEffect, useState} from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({name: '', email: ''});
    const { name, email } = formState;

    useEffect(() => {
        // console.log('hey')
    }, []);

    useEffect(() => {
        // console.log('FormState cambio')
    }, [formState]);

    useEffect(() => {
        // console.log('FormState cambio')
    }, [email]);
    
    const handleInputChange = ({target}) => {
        setFormState({...formState, [ target.name ]: target.value });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                    />

                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                    />    
            </div>

            { name === '1234' && <Message /> }
        </>
    )
}
