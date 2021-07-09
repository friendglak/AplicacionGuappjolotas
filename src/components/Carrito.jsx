import React, { useEffect } from 'react'
import GetLocalStorage from '../helpers/GetLocalStorage'
const Carrito = () => {
    const {carrito, getProductoLocalStorage} = GetLocalStorage();

    useEffect(() => {
        getProductoLocalStorage()
    }, [])
    return (
        <div>
            <h1>Carrito</h1>
            <p>{carrito}</p>
        </div>
    )
}

export default Carrito
