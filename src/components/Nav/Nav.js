import React, {useContext, useState} from 'react';
import {useLocation} from '@reach/router';
import styled, {css} from 'styled-components';
import {Link} from 'gatsby';
/*import Hamburger from 'components/Hamburger/Hamburger';*/
import MobileMenu from 'components/MobileMenu/MobileMenu';



const StyledHeader = styled.header`
  height: 120px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  background-color: white;
  z-index: 9;

  ::after {
    content: '';
    position: absolute;
    display: flex;
    width: 100%;
    height: 5px;
    left: 0;
    background-color: ${({theme}) => theme.honey};
    z-index: -1;
  }

  ::after {
    top: 120px;
  }

  ${({theme}) => theme.media.desktop} {
    position: absolute;
    top: 10px;
    height: 120px;

    ::after {
      display: none;
    }

    ${({notmain}) =>
            notmain &&
            css`
              position: relative;
              height: 110px;
              margin-bottom: 30px;

              ::before,
              ::after {
                content: '';
                position: absolute;
                display: flex;
                width: 100%;
                height: 5px;
                left: 0;
                background-color: ${({theme}) => theme.honey};
              }

              ::before {
                top: 0px;
              }

              ::after {
                top: 125px;
                z-index: -1;
              }
            `}

  }

`;

const StyledInner = styled.div`
  width: 100%;
  height: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  ${({theme}) => theme.media.desktop} {
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    margin-top: 15px;
  }
`;
const StyledNav = styled.nav`
  display: none;

  ${({theme}) => theme.media.desktop} {
    display: flex;
    padding-right: 0;
    width: 50%;
    min-width: 550px;
    list-style-type: none;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    font-family: ${({theme}) => theme.font.family.Lobster};
  }
`;

const StyledMenuList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-content: center;
`;

const Li = styled.li`
  position: relative;
  height: 40px;
    /* font-size: ${({theme}) => theme.font.size.l}; */
  padding-left: 5px;
  margin-bottom: 2px;
  text-decoration: none;

  color: ${({theme}) => theme.black};

  &:hover {

    text-decoration: none;
    transform: scale(1.1);
    transition: transform ease-in 0.3s;

    .honey {
      display: block;
      z-index: 99999;

    }
  }
`;

const Links = styled(Link)`
  font-size: ${({theme}) => theme.font.size.s};
  padding-right: 20px;
  padding-left: 5px;
  text-decoration: none;
  border-left: ${({noborder}) => (noborder ? 'none' : '2px solid black')};
  color: ${({theme}) => theme.black};
  
  b{
    padding: 0 10px;
    width: 35px;
    height: 35px;
    border: 1px black solid;
    border-radius: 50%;
  
  }

  &:hover {
    padding-right: 10px;
    margin-right: 10px;
    color: ${({theme}) => theme.honey};
    box-shadow: ${({noborder}) => (noborder ? 'none' : '1px 1px 3px 1px rgba(0, 0, 0, 0.3)')};
    border-radius: 5px;
    text-decoration: none;
    border-left: none;
    transition: ease-in 0.3s;
  }

  ${({theme}) => theme.media.desktop} {
    font-size: ${({theme}) => theme.font.size.xm};
    font-weight: 500;

    &.active {
      border-bottom: 3px solid ${({theme}) => theme.primary};
      border-left: none;
      font-size: ${({theme}) => theme.font.size.m};
      margin-top: 0;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;
const LogoDiv = styled.div`
  width: 40%;
  min-width: 260px;
  text-decoration: none;
  height: 130px;
  margin-left: 1%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({theme}) => theme.media.desktop} {
    width: 40%;
    min-width: 260px;
    height: ${({notmain}) => notmain ? '120px' : '100px'};
    margin-left: 2%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledHoneyMenu = styled.div`
  width: 230px;
  height: 90px;
  display: none;
  background-color: white;
  position: absolute;
  top: 40px;
  z-index: 9999999999;
  left: -20px;
  box-shadow: ${({noborder}) => (noborder ? 'none' : '1px 1px 3px 1px rgba(0, 0, 0, 0.3)')};
  border-radius: 5px;

  &:hover {
    display: block;

  }
`
const StyledUlHoneyMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 10px 10px 20px;
  list-style: none;
`

const Nav = () => {
    const location = useLocation();
    const manpage = (location.pathname.length > 1);
    const [isMenuOpen, setMenuState] = useState(false);
   /* const [order] = useContext(orderContext);
    const OrderLength = order.length<1 ? null : order.length;*/
    const toogleMobileMenu = () => {
        setMenuState(!isMenuOpen);
    };
    // eslint-disable-next-line no-undef
    // const url = typeof window !== `undefined` ? window.location.href : null;
    // const ismainpage = (url !== null &&url.length > 22? 1 : 0);
    return (
        <StyledHeader notmain={manpage}>

            <StyledInner>
                <Links noborder to="/">
                    <LogoDiv notmain={manpage}>
                        <p>logo</p>
                    </LogoDiv>
                </Links>

            {/*    <Hamburger onClick={toogleMobileMenu} isOpen={isMenuOpen}/>*/}
                <MobileMenu isOpen={isMenuOpen}/>

                <StyledNav>
                    <StyledMenuList>
                        <Li>
                            <Links activeClassName="active" to="/">
                                Start
                            </Links>
                        </Li>
                        <Li>
                            <Links to="/">Oferta</Links>
                            <StyledHoneyMenu className="honey">
                                <StyledUlHoneyMenu>
                                    <Li>
                                        <Links to="/miody_tradycyjne">Miody tradycyjne</Links>
                                    </Li>
                                    <Li>
                                        <Links to="/miody_smakowe">Miody smakowe</Links>
                                    </Li>
                                </StyledUlHoneyMenu>
                            </StyledHoneyMenu>
                        </Li>
                        <Li>
                            <Links activeClassName="active" to="/aktualnosci/">
                                Aktalności
                            </Links>
                        </Li>
                        <Li>
                            <Links activeClassName="active" to="/o-nas/">
                                O nas
                            </Links>
                        </Li>
                        <Li>
                            <Links activeClassName="active" to="/kontakt/">
                                Kontakt
                            </Links>
                        </Li><Li>
                        <Links activeClassName="active" to="/sklep/">
                            Koszyk
                        </Links>
                    </Li>
                    </StyledMenuList>
                </StyledNav>
            </StyledInner>
        </StyledHeader>
    );
};
export default Nav;
