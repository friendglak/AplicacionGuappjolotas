const EliminarProductoCarrito = () => {
    const _eliminarProductoCarrito = (id, carrito, setCarrito) =>{
        const eliminarProducto = carrito.filter(ele => ele.id !== id);
        localStorage.setItem("Carrito", JSON.stringify(eliminarProducto));
        setCarrito(eliminarProducto)
    }
    return {_eliminarProductoCarrito}
}

export default EliminarProductoCarrito
