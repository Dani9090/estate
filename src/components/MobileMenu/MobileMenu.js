import React, {useState} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "gatsby"

const StyledWrapper = styled.div`
position: fixed;
width:100vw;
height:99vh;
background-color: ${({theme}) => theme.white};
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
left: 0;
z-index:9998;
transform: translateX( ${({isOpen}) => isOpen ? '0%' : '-100%'});
transition: transform .25s ease-in-out;
`;


const MenuLinkWraper =styled.ul`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

const MenuLink = styled.li`
margin: 20px 0;
list-style: none;
font-family: ${({ theme }) => theme.font.family.Lobster};
font-size: ${({ theme }) => theme.font.size.s};
opacity: ${({isOpen}) => isOpen ? '1' : '0'};
transition: opacity .25s .25s ease-in-out;
text-decoration: none;
list-style-type: none;
border: none;
background-color: transparent;
`;

const StyledOffertMenu = styled.ul`
  width: 100%;
  height: ${({ isOffertOpen }) => (isOffertOpen ? 'auto' : '0')};
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.Montserrat};
  font-size: ${({ theme }) => theme.font.size.s};
  opacity: ${({ isOffertOpen }) => (isOffertOpen ? '1' : '1')};
  transform: translateX(${({ isOffertOpen }) => (isOffertOpen ? '-0%' : '-300%')});
  transition: all 0.3s 0.1s ease-in-out;
  list-style-type: none;
  border-bottom: ${({ isOffertOpen  }) => (isOffertOpen  ? '3px solid white' : 'none' )};
  border-top: ${({ isOffertOpen  }) => (isOffertOpen  ? '2px solid white' : 'none' )};
  padding-left: 0%;
  position: relative;
`
const Links=styled(Link)`
font-size: ${({theme}) => theme.font.size.s};

text-decoration: none;
color : ${({theme}) => theme.black};
`

const MobileMenu = ({ isOpen }) => {
    const [isOffertOpen, setOffertOpen] = useState(false)

 const toogleOffertFree = () => {
    setOffertOpen(!isOffertOpen)
     }

    return(

<StyledWrapper isOpen={isOpen}>
<MenuLinkWraper>
<MenuLink isOpen={isOpen} ><Links to="/">Start</Links></MenuLink>
<MenuLink as="button" onClick={toogleOffertFree} isOpen={isOpen}>Oferta</MenuLink>
<StyledOffertMenu isOffertOpen={isOffertOpen}>
<MenuLink isOpen={isOpen} ><Links to="/miody_tradycyjne">Miody tradycyjne</Links></MenuLink>
<MenuLink isOpen={isOpen} ><Links to="/miody_smakowe">Miody smakowe</Links></MenuLink>
</StyledOffertMenu>
<MenuLink isOpen={isOpen}><Links to="/about/">O nas</Links></MenuLink>
<MenuLink isOpen={isOpen}><Links to="/news/">Aktalności</Links></MenuLink>
<MenuLink isOpen={isOpen}><Links to="/contact/">Kontakt</Links></MenuLink>
</MenuLinkWraper>
</StyledWrapper>

)}

MobileMenu.propTypes = {
    isOpen: PropTypes.bool,
}

MobileMenu.defaultProps ={
    isOpen: false,
}

export default MobileMenu;