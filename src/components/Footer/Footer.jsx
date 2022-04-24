import React from "react";
import styled from "styled-components";

import {
  StyledFooter,
  StyledWrapper,
  StyledP,
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
              <Links to="/procedura/">Procedura</Links>
            </li>
            <li>
              <Links to="/nieruchomosci/">Nieruchomości</Links>
            </li>
            <li>
              <Links to="/sklep/">Kontakt</Links>
            </li>
            <li>
              <Links to="/sklep/">Obsługiwane Miasta</Links>
            </li>
          </StyledNavFooter>
        </TopSide>
        <StyledP>
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez xxx w
          zakresie niezbędnym do oferowania produktów i usług, w tym podmiotów
          współpracujących z xxx Przyjmuję do wiadomości, że moje dane osobowe
          zostaną wprowadzone do bazy danych i będą przetwarzane przez xxx. dla
          celów statystycznych. Oświadczam również, iż moja zgoda jest
          dobrowolna a także, że zostałem poinformowany, iż mam prawo wglądu do
          swoich danych, ich poprawienia lub usunięcia. Administratorami danych
          osobowych jest xxx z siedzibą w xxx (00-000) przy ul. xxx
        </StyledP>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
