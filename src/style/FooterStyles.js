import styled from "styled-components";
import { Link } from 'react-router-dom';
import Img from '../images/brand/logo.png';


const FooterContainer = styled.div`
    background-color: #E5E5E5 ;
    padding: 1rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24;
    color: #151515;
`;

const FooterSubHeading = styled.p`
    margin-bottom: 20px;
    font-size: 20px;
    color: #151515;
`;

const FooterSubText = styled.p`
    margin-bottom: 20px;
    font-size: 16px;
    color: #151515;
`;

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

const SocialLogo = styled(Link)`
    color: #151515;
    justify-self: start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

const SocialIcon = styled.div`
    margin-right: 10px;
    width: 85px;
    height: 65px;
    background: url(${Img}) 0 45% no-repeat;
    background-size: 100% 100%;

`;

const WebsiteRights = styled.small`
    color: #151515;
    margin-bottom: 16px;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`
const SocialIconLink = styled.a`
    color: #151515;
    font-size: 24px;
`

export {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    SocialMedia,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialLogo,
    SocialMediaWrap,
   
};