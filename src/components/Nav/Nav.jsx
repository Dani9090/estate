// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line import/no-default-export
import React, { useState } from "react"
import { useLocation } from "@reach/router"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
/* import Hamburger from 'components/Hamburger/Hamburger'; */
import MobileMenu from "src/components/MobileMenu/MobileMenu"

const StyledHeader = styled.header`
  height: 120px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: transparent;
  z-index: 9;

  ::after {
    content: "";
    position: absolute;
    display: flex;
    width: 100%;
    height: 5px;
    left: 0;
    z-index: -1;
  }

  ::after {
    top: 120px;
  }

  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    top: 10px;
    height: 60px;
    background: transparent;

    ::after {
      display: none;
    }

    ${({ notmain }) =>
      notmain &&
      css`
        position: relative;
        height: 110px;
        top: 0;
        border: 1px solid ${({ theme }) => theme.black};
        background-color: ${({ theme }) => theme.black};
      `}
  }
`

const StyledInner = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
`
const StyledNav = styled.nav`
  display: none;
  letter-spacing: 0.1em;
  font-weight: 300;

  ${({ theme }) => theme.media.desktop} {
    display: flex;
    padding-right: 0;
    width: auto;
    color: ${({ theme }) => theme.white};
    min-width: 650px;
    list-style-type: none;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    font-family: ${({ theme }) => theme.font.family.gilda};
  }
`

const StyledMenuList = styled.ul`
  width: 100%;
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

  color: ${({ theme }) => theme.white};

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

const Links = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.xs};
  padding-right: 20px;
  padding-left: 5px;
  text-decoration: none;
  color: ${({ theme }) => theme.white};

  b {
    padding: 0 10px;
    width: 35px;
    height: 35px;
    border: 1px black solid;
    border-radius: 50%;
  }

  &:hover {
    padding-right: 10px;
    margin-right: 10px;
    color: ${({ theme }) => theme.honey};
    text-decoration: none;
    border-left: none;
    transition: ease-in 0.3s;
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};

    &.active {
      border-bottom: 3px solid ${({ theme }) => theme.primary};
      border-left: none;
      font-size: ${({ theme }) => theme.font.size.xxm};
      margin: 0 10px;
    }
  }
`
const Phone = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  ${({ theme }) => theme.media.desktop} {
    max-width: 200px;
    height: 60px;
    margin-left: 80px;
    display: flex;
    flex-direction: column;

    

    p {
      margin: 0 auto;
      height: 25px;
      font-weight: 400;
      max-width: 200px;
      font-size: ${({ theme }) => theme.font.size.xm};
      letter-spacing: 0.2em;

      &:last-child {
        margin-top: 5px;
        font-size: ${({ theme }) => theme.font.size.m};
        color: ${({ theme }) => theme.honey};
      }
    }

    ${({ notmain }) =>
      notmain &&
      css`
        padding: 0;

        &:last-child {
          margin-top: 0;
          color: red !important;
        }
      `}
  }
  }
`

const Nav = () => {
  const location = useLocation()
  const manpage = location.pathname.length > 1
  const [isMenuOpen] = useState(false)
  console.log(manpage)

  return (
    <StyledHeader notmain={manpage}>
      <StyledInner>
        <Links noborder to="/">
          <Phone notmain={manpage}>
            <p>Zadzwoń </p>

            <p>510 668 433</p>
          </Phone>
        </Links>

        {/*    <Hamburger onClick={toogleMobileMenu} isOpen={isMenuOpen}/> */}
        <MobileMenu isOpen={isMenuOpen} />

        <StyledNav>
          <StyledMenuList>
            <Li>
              <Links activeClassName="active" to="/#onas">
                O nas
              </Links>
            </Li>
            <Li>
              <Links activeClassName="active" to="/procedura/">
                Procedura
              </Links>
            </Li>
            <Li>
              <Links activeClassName="active" to="/nieruchomosci/">
                Nieruchomości
              </Links>
            </Li>
            <Li>
              <Links activeClassName="active" to="/sklep/">
                Kontakt
              </Links>
            </Li>
            <Li>
              <Links activeClassName="active" to="/sklep/">
                Obsługiwane Miasta
              </Links>
            </Li>
          </StyledMenuList>
        </StyledNav>
      </StyledInner>
    </StyledHeader>
  )
}

// eslint-disable-next-line import/no-default-export
export default Nav
