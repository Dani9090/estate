import React, {useState} from "react"
import {useLocation} from '@reach/router';
import Hamburger from "src/components/Hamburger/Hamburger";
import MobileMenu from "src/components/MobileMenu/MobileMenu"
import {StyledHeader, StyledInner, StyledNav, StyledMenuList, Li,Phone,Links} from "./Nav.styles"


const Nav = () => {
    const [isMenuOpen, setMenuState] = useState(false)

    const toogleMobileMenu = () => {
        setMenuState(!isMenuOpen)
    }

    const location = useLocation()
    const manpage = location.pathname.length > 1

    return (
        <StyledHeader notmain={manpage}>
            <StyledInner>
                <Links to="/">
                    <Phone notmain={manpage}>
                        <p>Zadzwoń </p>

                        <p>510 668 433</p>
                    </Phone>
                </Links>

                <Hamburger onClick={toogleMobileMenu} isOpen={isMenuOpen} />
                <MobileMenu isOpen={isMenuOpen} setMenuState={setMenuState} onClick={toogleMobileMenu}/>

                <StyledNav notmain={manpage}>
                    <StyledMenuList notmain={manpage}>
                        <Li>
                            <Links notmain={manpage} activeClassName="active" to="/#onas">
                                O nas
                            </Links>
                        </Li>
                        <Li>
                            <Links
                                notmain={manpage}
                                activeClassName="active"
                                to="/#procedura"
                            >
                                Procedura
                            </Links>
                        </Li>
                        <Li>
                            <Links
                                notmain={manpage}
                                activeClassName="active"
                                to="/nieruchomosci/"
                            >
                                Nieruchomości
                            </Links>
                        </Li>
                        <Li>
                            <Links notmain={manpage} activeClassName="active" to="/#kontakt">
                                Kontakt
                            </Links>
                        </Li>
                        <Li>
                            <Links notmain={manpage} activeClassName="active" to="/#obslugiwaneMiasta">
                                Obsługiwane Miasta
                            </Links>
                        </Li>
                    </StyledMenuList>
                </StyledNav>
            </StyledInner>
        </StyledHeader>
    )
}

export default Nav
