import React from "react"
import styled from "styled-components"

const StyleFooter = styled.footer`
  width: 100vw;
  height: 200px;
  position: relative;
  border: 1px red solid;
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
`

const StyledP = styled.p`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 600;

  ${({ theme }) => theme.media.desktop} {
    text-align: center;
    margin-top: 10px;
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 600;
  }
`

const Footer = () => {
  return (
    <StyleFooter>
      <p>logo</p>

      <StyledP>© 2021 All rights reserved</StyledP>
    </StyleFooter>
  )
}

export default Footer
