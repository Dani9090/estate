import React from 'react';
import styled from 'styled-components';


const StyleFooter = styled.div`
  width: 100vw;
  height: 200px;
  position: relative;
  background-color: ${({ theme }) => theme.honey};
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: 185px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyledP = styled.p`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-family: ${({ theme }) => theme.font.family.Montserrat};
  font-weight: 600;
  ${({ theme }) => theme.media.desktop} {
    text-align: center;
    margin-top: 10px;
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-family: ${({ theme }) => theme.font.family.Montserrat};
    font-weight: 600;
  }
`;
const LogoFooter = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 10px;
  margin-left: 10px;
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  z-index: 1;
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: auto;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
  }
`;


const Footer = () => (
  <StyleFooter>
    <LogoFooter>
<p>logo</p>
    </LogoFooter>

    <StyledP>© 2021 All rights reserved</StyledP>
  </StyleFooter>
);
export default Footer;
