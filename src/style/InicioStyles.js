import styled from "styled-components";


const ContainerMain = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;

    @media screen and (max-width: 991px){
        padding-left: 30px;
        padding-right: 30px;
    }

`;

const DivPadre = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  margin: 20px 0px 200px 0px;
     
`;

const DivHijo = styled.div`
  display: block;
  flex-basis: auto;
  flex-wrap: wrap;
  align-self: flex-start;
  width: 310px;
  height: 110px;
  padding: 20px;
  margin: 20px 20px 10px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;

 background-color: #E7E7E7;
`;

const DivImg = styled.div`
    width: 85px;
    display: flex;
    height: 65px;
    align-self: flex-start;
    background-size: 100% 100%;
`;

const DivInfo = styled.div`
   width: 184px;
   height: 46px;
   top: 33px; 
   left: 112px;
`;

const H2Info = styled.h3`
    background-color: transparent;
    color: #484747;
    margin-top: 8px;
`;

const H2Price = styled.h3`
    background-color: transparent ;
    color: #FA4A0C;
`;

const DivHijo2 = styled.div`
  display: block;
  flex-basis: auto;
  flex-wrap: wrap;
  align-self: flex-start;
  width: 310px;
  height: 110px;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  margin-top: 50px;

 background-color: #E7E7E7;

`;

const DivHijo3 = styled.div`
 display: block;
  flex-basis: auto;
  flex-wrap: wrap;
  align-self: flex-start;
  width: 310px;
  height: 110px;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  margin-top: 50px;

 background-color: #E7E7E7;
`;

const InicioHeading = styled.p`
margin: 20px 0px 25px 1px;
font-size: 20px;
font-weight: 700;
   
`;


const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    width: 300px;
    margin-bottom: 20px;
    background-color: #E7E7E7;
    border-radius: 30px;
    color: #9A9A9D;
    
    border: none;
    font-size: 14px;
   

    &::placeholder{
        color: #242424;
    }

    @media screen and (max-width: 820px){
        width: 100%;
        margin: 0 0 16px 0;
    }

`;

const FormButton = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#F2AD60' : '#A85D09')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3 ease-out;
        background: #fff;
        background: ${({ primary }) => (primary ? '#A85D09' : '#F2AD60')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;


export {
    Form,
    FormButton,
    FormInput,
    ContainerMain,
    InicioHeading,
    DivPadre,
    DivHijo,
    DivHijo2,
    DivHijo3,
    DivImg,
    DivInfo,
    H2Info,
    H2Price
}