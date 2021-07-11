import React from 'react'
import EliminarProductoCarrito from './EliminarProductoCarrito'

const PaintProductoCarrito = ({carrito, setCarrito}) => {
    const {_eliminarProductoCarrito} = EliminarProductoCarrito();
    return (
        <div>
            {console.log(carrito)}
            {carrito.map(ele =>(
                <div key={ele.id}>
                    <img src={ele.imagen} alt={ele.nombre} />
                    <p>{ele.nombre}</p>
                    <p>{ele.precio}</p>
                    <button onClick={() => _eliminarProductoCarrito(ele.id, carrito, setCarrito)}>Eliminar</button>
                </div>
            ))}
        </div>
    )
}

export default PaintProductoCarrito
