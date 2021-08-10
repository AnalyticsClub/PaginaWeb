import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap, SocialLogo,SocialIcons,SocialIconLink,SocialH1} from './footerElemenst'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo  onClick={toggleHome}>Analytics Club</SocialLogo>
                        <SocialH1>Social Media</SocialH1>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/Analytics-Club-161522219339934" target= "_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/analytics.club.ac/" target= "_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="//co.linkedin.com/company/analytics-club-ac" target= "_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/channel/UCGxUSr66sM6TYWx1ZFwibCQ" target= "_blank" aria-label="YouTube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="//github.com/AnalyticsClub" target= "_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
