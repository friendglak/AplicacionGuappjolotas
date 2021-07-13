import React from "react";
import {
  ContenedorCarrito,
  ContenedorItemCarrito,
  ImgItemCarrito,
  Nombre,
  Cantidad,
  Precio,
  ContainerButtonE,
  ButtonE,
} from "../style/CarritoStyles";
import EliminarProductoCarrito from "./EliminarProductoCarrito";

const PaintProductoCarrito = ({ carrito, setCarrito }) => {
  const { _eliminarProductoCarrito } = EliminarProductoCarrito();
  return (
    <ContenedorCarrito>
      {carrito.map((ele) => (
        <ContenedorItemCarrito key={ele.id}>
          <ImgItemCarrito src={ele.imagen} alt={ele.nombre} />
          <Nombre>{ele.nombre}</Nombre>
          <Precio>$ {ele.precio}</Precio>
          <Cantidad>x {ele.cantidad}</Cantidad>{" "}
          <ButtonE
            onClick={() =>
              _eliminarProductoCarrito(ele.id, carrito, setCarrito)
            }
          >
            x
          </ButtonE>
        </ContenedorItemCarrito>
      ))}
    </ContenedorCarrito>
  );
};

export default PaintProductoCarrito;
