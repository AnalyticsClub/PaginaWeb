import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { NavBtnLink } from '../Navbar/NavbarElements';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Analytics Club </HeroH1>

                <HeroP>
                Club enfocado al Análisis de Datos, Machine Learning, IA y más. Síguenos para noticias, charlas, talleres y eventos gratuitos.
                </HeroP>
                <HeroBtnWrapper>
                    <NavBtnLink href="mailto:analytics.club.contact@gmail.com" onMouseEnter={onHover} onMouseLeave={onHover} 
                    primary = "true" dark = "true">
                        Send Message {hover ? <ArrowForward /> : <ArrowRight/>} 
                    </NavBtnLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
