import React ,{useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,NavName, ImgWrap, Img} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'
import IconA from '../../images/Blanco.png'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const toggleSocial = () => {
        scroll.scrollToBottom()
    }

    return (
      <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
            <ImgWrap>
            <Img src={IconA} alt="logo"/>
            </ImgWrap>
                <NavName to='/' onClick={toggleHome}>Analytics Club</NavName>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Proyectos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="members" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Miembros</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={toggleSocial} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Social Media</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink href="mailto:analytics.club.contact@gmail.com" >Send Message</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    );
}

export default Navbar;
