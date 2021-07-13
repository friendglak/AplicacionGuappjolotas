import React from 'react'
import { ContenedorCarrito, ContenedorItemCarrito, ImgItemCarrito } from '../style/CarritoStyles';
import EliminarProductoCarrito from './EliminarProductoCarrito'

const PaintProductoCarrito = ({carrito, setCarrito}) => {
    const {_eliminarProductoCarrito} = EliminarProductoCarrito();
    return (
        <ContenedorCarrito>
            {carrito.map(ele =>(
                <ContenedorItemCarrito key={ele.id}>
                    <ImgItemCarrito src={ele.imagen} alt={ele.nombre} />
                    <p>{ele.nombre}</p>
                    <p>{ele.precio}</p>
                    <p>Cantidad: {ele.cantidad}</p>
                    <button onClick={() => _eliminarProductoCarrito(ele.id, carrito, setCarrito)}>Eliminar</button>
                </ContenedorItemCarrito>
            ))}
        </ContenedorCarrito>
       
    )
}

export default PaintProductoCarrito
