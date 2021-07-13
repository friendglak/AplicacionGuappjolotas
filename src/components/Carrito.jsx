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

    const _handlePagar = async () =>{
        console.log("Estoy pagando")
    }
    return (
        <div>
            <PaintProductoCarrito carrito={carrito} setCarrito={setCarrito} />
            <DivButton>
                <ButtonPay role="link" onClick={_handlePagar}>Pagar</ButtonPay>
            </DivButton>
        </div>
    )
}

export default Carrito
