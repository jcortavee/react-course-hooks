import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
        const mouseMove = (e) => {
            console.log(':D');
        };

        window.addEventListener('mousemove', mouseMove);

        console.log('Componente montado');

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            console.log('Componente desmontado');
        }
    }, []);

    return (
        <div>
            <h3>You're great!</h3>
        </div>
    )
}
