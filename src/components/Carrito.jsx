import React, { useEffect } from 'react'
import GetLocalStorage from '../helpers/GetLocalStorage'
import PaintProductoCarrito from '../hooks/PaintProductoCarrito';
import { DivButton, ButtonPay } from '../style/CarritoStyles';

// import ProductosPasarelaStripe from '../hooks/ProductosPasarelaStripe';



const Carrito = () => {
    const { carrito, setCarrito, getProductoLocalStorage } = GetLocalStorage();
    // const {_handleProductosStripe} = ProductosPasarelaStripe();

    useEffect(() => {
        getProductoLocalStorage()
        // return  _handleProductosStripe()
    }, []);
    return (
        <div>
            <PaintProductoCarrito carrito={carrito} setCarrito={setCarrito} />
            <DivButton>
                <ButtonPay>Pagar</ButtonPay>
            </DivButton>
        </div>
    )
}

export default Carrito
