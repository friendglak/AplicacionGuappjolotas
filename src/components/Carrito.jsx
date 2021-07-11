import React, { useEffect } from 'react'
import GetLocalStorage from '../helpers/GetLocalStorage'
import PaintProductoCarrito from '../hooks/PaintProductoCarrito';
// import ProductosPasarelaStripe from '../hooks/ProductosPasarelaStripe';



const Carrito = () => {
    const {carrito, setCarrito, getProductoLocalStorage} = GetLocalStorage();
    // const {_handleProductosStripe} = ProductosPasarelaStripe();

    useEffect(() => {
        getProductoLocalStorage()
        // return  _handleProductosStripe()
    }, []);
    return (
        <div>
            <h1>Carrito</h1>
            <PaintProductoCarrito carrito={carrito} setCarrito={setCarrito}/>
        </div>
    )
}

export default Carrito
