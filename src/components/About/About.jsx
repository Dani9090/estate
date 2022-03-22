import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.black};
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.gilda};
`

const About = () => {
  return (
    <StyledWrapper>
      <H1>Zajmujemy się zakupem nieruchomości wszelkiego rodzaju w tym:</H1>
    </StyledWrapper>
  )
}
export default About
