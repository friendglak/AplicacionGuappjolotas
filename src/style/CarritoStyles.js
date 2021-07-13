import styled from "styled-components";

const ContenedorCarrito = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContenedorItemCarrito = styled.div`
  margin: 10px 20px 15px 20px;
  text-align: center;
`;

const ImgItemCarrito = styled.img`
  margin: auto;
`;

const Nombre = styled.h4`
  color: black;
`;

const Precio = styled.h3`
  color: #fa4a0c;
`;
const Cantidad = styled.h4`
  color: #fa4a0c;
`;

const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerButtonE = styled.div`
  width: 190px;
  height: 72px;
  border-radius: 20px;
  background-color: #e7e7e7;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 15px;
`;

const ButtonE = styled.button`
  outline: black;
  width: 33.33px;
  height: 33.33px;
  border-radius: 20px;
  margin: auto;
  border: 2px solid black;
`;

const ButtonPay = styled.button`
  width: 280px;
  height: 70px;
  background-color: #fa4a0c;
  color: white;
  border-radius: 25px;
  outline: none;
  margin-bottom: 50px;
  border: 1px solid #fa4a0c;
  cursor: pointer;
`;

export {
  ContenedorCarrito,
  ContenedorItemCarrito,
  ImgItemCarrito,
  DivButton,
  ButtonPay,
  Nombre,
  Cantidad,
  Precio,
  ContainerButtonE,
  ButtonE
};
