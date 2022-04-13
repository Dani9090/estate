import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const StyledWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: 0;
  top:0;
  z-index: 9998;
  transform: translateX(${({ isOpen }) => (isOpen ? "0%" : "-100%")});
  transition: transform 0.25s ease-in-out;
`

const MenuLinkWraper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const MenuLink = styled.li`
  margin: 20px 0;
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.Lobster};
  font-size: ${({ theme }) => theme.font.size.s};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: opacity 0.25s 0.25s ease-in-out;
  text-decoration: none;
  list-style-type: none;
  border: none;
  background-color: transparent;
`;

const StyledOffertMenu = styled.ul`
  width: 100%;
  height: ${({ isOffertOpen }) => (isOffertOpen ? "auto" : "0")};
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.s};
  opacity: ${({ isOffertOpen }) => (isOffertOpen ? "1" : "1")};
  transform: translateX(
    ${({ isOffertOpen }) => (isOffertOpen ? "-0%" : "-300%")}
  );
  transition: all 0.3s 0.1s ease-in-out;
  list-style-type: none;
  border-bottom: ${({ isOffertOpen }) =>
    isOffertOpen ? "3px solid white" : "none"};
  border-top: ${({ isOffertOpen }) =>
    isOffertOpen ? "2px solid white" : "none"};
  padding-left: 0%;
  position: relative;
`
const Links = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.s};

  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;
const H2=styled.h2`
  height: 15vh;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  
`

const MobileMenu = ({ isOpen, setMenuState }) => {
  const toogleMobileMenu = () => {
    setMenuState(false)
  }
  return (
    <StyledWrapper onClick={toogleMobileMenu} isOpen={isOpen}>

      <Links onClick={toogleMobileMenu} to="/">Z-lokatorem</Links>
      <MenuLinkWraper>

        <MenuLink isOpen={isOpen}>
          <Links onClick={toogleMobileMenu} to="/#onas" >O nas </Links>
        </MenuLink>
        <MenuLink isOpen={isOpen}>
         <Links to="/#procedura">Procedura</Links>
        </MenuLink>
        <MenuLink isOpen={isOpen}>
          <Links to="/nieruchomosci/">Nieruchomości</Links>
        </MenuLink>
        <MenuLink isOpen={isOpen}>
          <Links  to="/#kontakt">Kontakt</Links>
        </MenuLink>
        <MenuLink isOpen={isOpen}>
          <Links to="/#obslugiwaneMiasta">Obsługiwane Miasta</Links>
        </MenuLink>
      </MenuLinkWraper>
    </StyledWrapper>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
}

MobileMenu.defaultProps = {
  isOpen: false,
}

export default MobileMenu
