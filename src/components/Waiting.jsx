import React, {useEffect} from 'react'

const Waiting = () => {
    useEffect(() => {
        const espera = () =>{
            setTimeout(() => {
                window.location = `/inicio`; 
            }, 2000);
        }
        espera()
    }, [])
    return (
        <div>
            <h1>Soy la pagina de espera</h1>
        </div>
    )
}

export default Waiting
