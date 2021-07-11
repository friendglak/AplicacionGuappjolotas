import {useState} from 'react'

const GetLocalStorage = () => {
    const [carrito, setCarrito] = useState([]);


    const getProductoLocalStorage = () => {
        setCarrito(JSON.parse(localStorage.getItem("Carrito")))
    }
    return {carrito, setCarrito, getProductoLocalStorage}
}
export default GetLocalStorage
