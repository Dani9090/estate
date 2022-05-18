import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";




const StyledHamburger = styled.button`
    width:50px;
    height:50px;
    border: none;
    background:none;
    padding-left: 12px;
   margin: 5px 15px 0 0;
  z-index: 999999;
    /* border: 2px solid ${({theme}) => theme.blackfont};
    border-radius:10%; */
    &:focus{
    outline: 2px auto ${({theme}) => theme.blackfont};
    -moz-outline-radius: 5px;
    
   }

${({theme}) => theme.media.tablet} {
    width:50px;
    height:50px;
    border: none;
    background:none;
    z-index:9999;
    padding-left: 15px;
    margin-top: 35px;
    margin-right: 10px;
    margin-left: 15px;
   &:focus{
    outline: 2px auto ${({theme}) => theme.blackfont};
    -moz-outline-radius: 5px;
    
   }
}
${({theme}) => theme.media.desktop} {
    display:none;
}

 `;
const InnerHambuerger = styled.div`
position: relative;
width: 22px;
height: 2px;
background-color: ${({theme, isOpen}) => isOpen ? 'transparent':theme.white};
transition: background-color .15s ease-in-out;


::before, ::after {
    content:'';
    position: absolute;
    display: flex;
    width: 22px;
    height: 2px;
    left: 0;
    background-color: ${({theme, isOpen}) => isOpen ? theme.black : theme.white};
    transition: transform .25s .15s ease-in-out;
}
::before{
    top: -7px;
    transform: translateY(${({isOpen}) => isOpen ? '7px' : '0'}) rotate(${({isOpen}) => isOpen ? '45deg' : '0'});
}
::after{
    top: 7px;
    transform: translateY(${({isOpen}) => isOpen ? '-7px' : '0'}) rotate(${({isOpen}) => isOpen ? '-45deg' : '0'});
}
`;


const Hamburger = ({isOpen,setMenuState, isMenuOpen, ...props}) => {
    const toogleMobileMenu = () => {
        setMenuState(!isMenuOpen)
    }
    return(

    <StyledHamburger onClick={toogleMobileMenu} {...props}>
        <InnerHambuerger isOpen={isOpen} />
    </StyledHamburger>
)};


Hamburger.propTypes = {
    isOpen: PropTypes.bool,
    isMenuOpen: PropTypes.bool,
    setMenuState:PropTypes.func,
}

export default Hamburger;
