import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialIcon
} from '../style/FooterStyles';

const Footer = () => {


    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/inicio">
                                <SocialIcon />
                            </SocialLogo>
                            <WebsiteRights> © ELMEJOREQUIPODELMUNDO 2021</WebsiteRights>
                            <SocialIcons>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterSubscription>
            </FooterContainer>

        </>
    )
}


export default Footer;