import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;;
    
};

`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 991px){
        padding-left: 30px;
        padding-right: 30px;
    }
`;

export const Button = styled.button`
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


export default GlobalStyle