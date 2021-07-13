import styled from "styled-components";

const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DetailPrecio = styled.h2`
    color: #FA4A0C;
`;

const ContainerButtonD = styled.div`
    width: 190px;
    height: 72px;
    border-radius: 20px;
    background-color: #E7E7E7;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 15px


`;

const ContadorP = styled.p`
    margin: auto; 
`;

const ButtonD = styled.button`
    outline: black;
    width: 33.33px;
    height: 33.33px;
    border-radius: 20px;
    margin: auto;
    border: 2px solid black;
`;

const ContainerSabor = styled.div`
    flex-wrap: wrap;
`;

const TextoSabor = styled.h3`
    text-align: center;
    margin-bottom: 20px;
`;

const TextoCombo = styled.h3`
    text-align: center;
    margin-bottom: 20px;
`;

const ContainerMainCombo = styled.div`
    flex-wrap: wrap;
`;

const ContainerCombo = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: auto;
`;

const PintarCombo = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 20px 20px 20px 20px;
`;

const TextoPintarCombo = styled.h5`
    align-self: flex-start;
`;

const ButtonCar = styled.button`
    width: 280px;
    height: 70px;
    background-color: #FA4A0C;
    color: white;
    border-radius: 25px;
    outline: none;
    margin-bottom: 50px;
    border: 1px solid #FA4A0C;
    cursor: pointer;
`;


export {
    ContainerButtonD,
    ButtonD,
    ContainerDetails,
    ContadorP,
    DetailPrecio,
    ContainerSabor,
    ContainerMainCombo,
    ContainerCombo,
    PintarCombo,
    TextoCombo,
    TextoSabor,
    TextoPintarCombo,
    ButtonCar
}