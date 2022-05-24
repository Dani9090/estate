import React from "react";
import styled from "styled-components";

import {
  StyledFooter,
  StyledWrapper,
  Links,
  Phone
} from "./Footer.styles";

const TopSide = styled.div`
  width: 100%;

${({ theme }) => theme.media.desktop} {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
}
`;

const StyledNavFooter = styled.ul`
  width: 100%;
  font-family: ${({ theme }) => theme.font.family.inter};
  height: 150px;
  padding: 10px 30px;
  display: grid;
  place-items: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  list-style: none;
  
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    font-family: ${({ theme }) => theme.font.family.inter};
    margin: 0 0 0 5%;
    height: 150px;
    padding: 20px 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    list-style: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <TopSide>
          <Links to="/">
            <Phone>
              <p>Zadzwoń </p>

              <p>510 668 433</p>
            </Phone>
          </Links>

          <StyledNavFooter>
            <li>
              <Links to="/#onas">O nas</Links>
            </li>
            <li>
              <Links to="/#procedura">Procedura</Links>
            </li>
            <li>
              <Links to="/nieruchomosci/">Nieruchomości</Links>
            </li>
            <li>
              <Links to="/#kontakt">Kontakt</Links>
            </li>
            <li>
              <Links to="/#obslugiwaneMiasta">Obsługiwane Miasta</Links>
            </li>
          </StyledNavFooter>
        </TopSide>

      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
