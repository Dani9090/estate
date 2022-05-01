import React, {useState} from "react"
import {useLocation} from "@reach/router"
import styled, {css} from "styled-components"
import {Link} from "gatsby"
import Hamburger from "src/components/Hamburger/Hamburger";
import MobileMenu from "src/components/MobileMenu/MobileMenu"

const StyledHeader = styled.header`
  position: absolute;
  width: 50vw;
  top: 20px;
  height: 60px;
  z-index: 999;
  background: transparent;

  ::after {
    content: "";
    position: absolute;
    display: flex;
    width: 100%;
    height: 5px;
    left: 0;
    z-index: -1;
  }
;

  ::after {
    top: 120px;
  }
;

  ${({theme}) => theme.media.desktop} {
      width: auto;
    position: absolute;
    top: 10px;
    height: 60px;
    background: transparent;

    ::after {
      display: none;
    }
  ;
    ${({notmain}) =>
            notmain &&
            css`
              position: relative;
              height: 100px;
              top: 0;
              border: 1px solid ${({theme}) => theme.black};
              background-color: ${({theme}) => theme.black};
            `};
  }
;
`;

const StyledInner = styled.div`
  width: 100vw;
  height: auto;
  margin: 0 auto;
  display: flex;
    overflow: hidden;
  ${({theme}) => theme.media.desktop} {
    width: 99vw;
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;

  }
`
const StyledNav = styled.nav`
  display: none;
  letter-spacing: 0.1em;
  font-weight: 300;

  ${({theme}) => theme.media.desktop} {
    display: flex;
    padding-right: 0;
    width: auto;
    color: ${({theme}) => theme.white};
    min-width: 650px;
    list-style-type: none;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    font-family: ${({theme}) => theme.font.family.gilda};
 
  }
`

const StyledMenuList = styled.ul`
  width: ${({notmain}) => (notmain ? "90%" : "100%")};
  height: auto;
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  align-content: center;
`

const Li = styled.li`
  position: relative;
  height: auto;
  padding-left: 5px;
  margin-bottom: 2px;
  text-decoration: none;

  color: ${({theme}) => theme.white};

  &:hover {
    text-decoration: none;
    transform: scale(1.1);
    transition: transform ease-in 0.3s;

    .honey {
      display: block;
      z-index: 99999;
    }
  }
`

const Links = styled(({notmain, ...props}) => <Link {...props} />)`
  width: 100%;
  padding-right: 20px;
  padding-left: 5px;
  text-decoration: none;
  color: ${({theme}) => theme.white};

  &:hover {
    padding-right: 10px;
    margin-right: 10px;
    color: ${({theme}) => theme.honey};
    text-decoration: none;
    border-left: none;
    transition: ease-in 0.3s;
  };
;

  ${({theme}) => theme.media.desktop} {
    font-size: ${({notmain, theme}) =>
            notmain ? theme.font.size.xs : theme.font.size.s};

    &.active {
      width: auto;
      border-bottom: 3px solid ${({theme}) => theme.primary};
      border-left: none;
      font-size: ${({theme}) => theme.font.size.s};
      padding: 0 10px;
    }
  ;
  }
;
`

const Phone = styled.div`
  width: 100%;
  max-width: 220px;
  height: 60px;
  margin-left: 0;
  display: flex;
  flex-direction: column;
    align-items: center;
  p {
    margin: 0;
    display: grid;
    place-items: center;
    height: ${({notmain}) => (notmain ? "auto" : "30px")};
    font-weight: 400;
    max-width: 250px;
    font-size: ${({notmain, theme}) =>
    notmain ? theme.font.size.s : theme.font.size.s};
    letter-spacing: 0.2em;
    &:last-child {
      margin-top: ${({notmain}) => (notmain ? "0" : "0px")};
      font-size: ${({notmain, theme}) =>
              notmain ? theme.font.size.s : theme.font.size.s};
      color: ${({theme}) => theme.honey};
    }
  }


  ${({theme}) => theme.media.desktop} {
    max-width: 200px;
    height: 60px;
    margin-left: 80px;
    display: flex;
    flex-direction: column;


    p {
      margin: 0 auto;
      height: ${({notmain}) => (notmain ? "auto" : "25px")};
      font-weight: 400;
      max-width: 200px;
      font-size: ${({notmain, theme}) =>
              notmain ? theme.font.size.s : theme.font.size.xm};
      letter-spacing: 0.2em;

      &:last-child {
        margin-top: ${({notmain}) => (notmain ? "0" : "5px")};
        font-size: ${({notmain, theme}) =>
                notmain ? theme.font.size.s : theme.font.size.m};
        color: ${({theme}) => theme.honey};
      }
    }

  }
`

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
