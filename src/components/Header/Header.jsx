import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const StyledHero = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    position: relative;
    height: 679px;
  }
`

const StyleIMG = styled.div`
  display: block;
  width: 100%;
  height: auto;
  z-index: 0;

  ${({ theme }) => theme.media.desktop} {
    display: block;
    width: 100%;
    height: 650px;
    z-index: 1;
    position: relative;
  }
`

const IMG = styled.img`
  width: 100%;
  height: 250px;

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: 750px;
    object-fit: cover;
    object-position: 50% 10%;
  }
`
const StyledP = styled.p`
  z-index: 2;
  position: absolute;
  margin: 0 auto;
  top: 270px;
  left: 20%;
  width: 60%;
  height: 230px;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.gilda};
  font-size: ${({ theme }) => theme.font.size.l};
  line-height: 2;
  text-align: center;
  letter-spacing: 0.1rem; ;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsHeader {
        description
        header {
          url
        }
      }
    }
  `)

  return (
    <StyledHero>
      {/* <StyledNav2>
        <Nav />
      </StyledNav2> */}
      <StyleIMG>
        <IMG src={data.datoCmsHeader.header.url} />
        <StyledP>{data.datoCmsHeader.description}</StyledP>
      </StyleIMG>
    </StyledHero>
  )
}

export default Header
