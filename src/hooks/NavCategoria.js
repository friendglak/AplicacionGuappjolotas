import React from "react";
import { ButtonCategoria } from "../style/CategoriaStyles";

const NavCategoria = ({ productos, setProductosCategoria }) => {
  const _handleCategoria = (e) => {
    const categoria = productos.filter(
      (ele) => ele.categoria === e.target.innerText
    );
    setProductosCategoria(categoria);
  };
  return (
    <nav>
      <ButtonCategoria onClick={_handleCategoria}>Guajolotas</ButtonCategoria>
      <ButtonCategoria onClick={_handleCategoria}>Bebidas</ButtonCategoria>
      <ButtonCategoria onClick={_handleCategoria}>Tamales</ButtonCategoria>
    </nav>
  );
};

export default NavCategoria;
