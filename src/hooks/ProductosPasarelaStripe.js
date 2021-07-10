import {useState} from 'react'
import GetLocalStorage from '../helpers/GetLocalStorage';

const ProductosPasarelaStripe = () => {
    const [productoStripe, setProductoStripe] = useState();
    const {carrito} = GetLocalStorage();

    const _handleProductosStripe = () => {
        // const productoPrincipal = producto.map(element => element.precio)
        // console.log(productoPrincipal)
        setProductoStripe(carrito)
        console.log(carrito.combo)
    }
    return {_handleProductosStripe}
}

export default ProductosPasarelaStripe
