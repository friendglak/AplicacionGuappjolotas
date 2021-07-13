import React, { useEffect } from 'react'
import GetLocalStorage from '../helpers/GetLocalStorage'
import PaintProductoCarrito from '../hooks/PaintProductoCarrito';
import { DivButton, ButtonPay } from '../style/CarritoStyles';
import { loadStripe } from "@stripe/stripe-js";
// import ProductosPasarelaStripe from '../hooks/ProductosPasarelaStripe';



const Carrito = () => {
    const { carrito, setCarrito, getProductoLocalStorage } = GetLocalStorage();
    // const {_handleProductosStripe} = ProductosPasarelaStripe();
    const PUBLIC_KEY = "pk_test_51J3WxqBbP3JGRmwnfVffXQE2tdimeAg5wrqN2RYl4z2eJcQO92U7xWYUILSmliy9Ay6wvAAOYIgKdv9GPbmOaK8G003KgExXWh";
    const URL_SERVER = "https://server-stripe-guajolotas-app.herokuapp.com";


    const _handlePagar = async () => {
       const stripePromise = loadStripe(PUBLIC_KEY);

       const products = carrito;
       const productsObject = { products }
       const stripe = await stripePromise;
       const response = await fetch(`${URL_SERVER}/create-checkout-session`, {
          body: JSON.stringify(productsObject),
          method: 'POST',
          headers: {
             'Content-Type': 'application/json'
          }
       });
       const session = await response.json();
       await stripe.redirectToCheckout({
          sessionId: session.id,
      });
    }
 
    useEffect(() => {
        getProductoLocalStorage()
        // return  _handleProductosStripe()
    }, []);


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
