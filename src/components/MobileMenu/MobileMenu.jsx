import React from "react"
import PropTypes from "prop-types"
import { StyledWrapper, MenuLinkWrapper, MenuLink, StyledHome, Links } from "./MobileMenu.styles"


const MobileMenu = ({ isOpen, setMenuState }) => {
  const toogleMobileMenu = () => {
    setMenuState(false)
 
  }
  
  return (
    <StyledWrapper onClick={toogleMobileMenu} isOpen={isOpen}>

<StyledHome>
      <Links isBig onClick={toogleMobileMenu} to="/">Z-lokatorem</Links>
</StyledHome>
      <MenuLinkWrapper>

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
      </MenuLinkWrapper>
    </StyledWrapper>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  isBig: PropTypes.bool,
  setMenuState:PropTypes.func,
}

MobileMenu.defaultProps = {
  isOpen: false,
  isBig: false,
}

export default MobileMenu
