import {useState} from 'react'

const GetLocalStorage = () => {
    const [carrito, setCarrito] = useState(null)
    
    const getProductoLocalStorage = () => {
        setCarrito(JSON.parse(localStorage.getItem("Cantidad Producto")))
    }
    return {carrito, getProductoLocalStorage}
}

export default GetLocalStorage
