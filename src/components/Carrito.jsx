import React, { useEffect } from 'react'
import GetLocalStorage from '../helpers/GetLocalStorage'
import ProductosPasarelaStripe from '../hooks/ProductosPasarelaStripe';



const Carrito = () => {
    const {carrito, getProductoLocalStorage} = GetLocalStorage();
    const {_handleProductosStripe} = ProductosPasarelaStripe();

    useEffect(() => {
        getProductoLocalStorage()
        return  _handleProductosStripe()
    }, []);
    return (
        <div>
            <h1>Carrito</h1>
            {/* <p>{carrito[0].combo}</p> */}

        </div>
    )
}

export default Carrito
