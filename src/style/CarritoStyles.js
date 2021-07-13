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

const DivButton = styled.div`
  display: flex;
  align-items: center;
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
};
